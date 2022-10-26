/* eslint-disable @typescript-eslint/no-explicit-any */
import { IWebhook } from '@moralisweb3/streams-typings';
import { Express, Request } from 'express';
import { LogsProcessor, TxsProcessor, CollectionNameBuilder, InternalTxsProcessor, Update } from '@moralisweb3/streams';
import bodyParser from 'body-parser';
import Moralis from 'moralis/.';
import { Upsert } from './upsert';

export const map = new Map();

const collectionNameBuilder = new CollectionNameBuilder();
const logsProcessor = new LogsProcessor(collectionNameBuilder);
const txsProcessor = new TxsProcessor(collectionNameBuilder);
const internalTxProcessor = new InternalTxsProcessor(collectionNameBuilder);

const verifySignature = (req: Request) => {
  const providedSignature = req.headers['x-signature'];
  if (!providedSignature) {
    throw new Error('Signature not provided');
  }
  Moralis.Streams.verifySignature({
    body: req.body,
    signature: providedSignature as string,
  });
};

export const webhookRouter = (app: Express, parseObject: any) => {
  return app.post('/streams', bodyParser.json({ limit: '50mb' }), async (req, res) => {
    try {
      verifySignature(req);
    } catch (e) {
      return res.status(401).json({ message: e.message });
    }
    try {
      const updates: Record<string, any> = {};
      const batch = req.body as IWebhook;
      const sync = map.get(batch.tag);

      const logUpdates = logsProcessor.process(batch);
      const txUpdates = txsProcessor.process(batch);
      const internalTxUpdates = internalTxProcessor.process(batch);

      // Prepare updates
      if (!updates[sync.tableName.concat('Logs')]) {
        updates[sync.tableName.concat('Logs')] = [];
      }
      updates[sync.tableName.concat('Logs')].push(prepareUpdate(logUpdates, ['logIndex', 'transactionHash'], true));

      if (!updates[sync.tableName.concat('Txs')]) {
        updates[sync.tableName.concat('Txs')] = [];
      }
      updates[sync.tableName.concat('Txs')].push(prepareUpdate(txUpdates, ['transactionIndex'], true));

      if (!updates[sync.tableName.concat('TxsInternal')]) {
        updates[sync.tableName.concat('TxsInternal')] = [];
      }
      updates[sync.tableName.concat('TxsInternal')].push(prepareUpdate(internalTxUpdates, ['hash'], true));

      const results: unknown[] = [];
      const upsert = new Upsert(parseObject);
      // eslint-disable-next-line guard-for-in
      for (const tableName in updates) {
        for (let index = 0; index < updates[tableName].length; index++) {
          const data = updates[tableName][index];
          data.forEach((document: any) => {
            results.push(upsert.execute(tableName, document.filter, document.update));
          });
        }
      }
      await Promise.all(results);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log('error while inserting logs', e.message);
      return res.status(500).json({ message: 'error while inserting logs' });
    }

    return res.status(200).json({ message: 'ok' });
  });
};

const prepareUpdate = (updates: Update[], filters: string[], upsertValue: boolean) => {
  const results: unknown[] = [];
  for (const update of updates) {
    results.push({
      filter: filters.reduce((acc: Record<string, any>, filter: string) => {
        // @ts-ignore
        acc[filter] = update.document[filter];
        return acc;
      }, {}),
      update: update.document,
      upsert: upsertValue,
    });
  }
  return results;
};
