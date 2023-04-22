export const createTokenMetadataResponse = (
  address: string,
  name: string,
  symbol: string,
  decimals: string,
  logo: string,
  logoHash: string,
  thumbnail: string,
  blockNumber: string | null,
  validated: string | null,
  createdAt: string,
  possibleSpam: false,
) => ({
  address,
  name,
  symbol,
  decimals,
  logo,
  logo_hash: logoHash,
  thumbnail,
  block_number: blockNumber,
  validated,
  created_at: createdAt,
  possible_spam: possibleSpam,
});
