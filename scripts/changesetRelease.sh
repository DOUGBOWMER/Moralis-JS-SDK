# Convert changesets into a new version
npx changeset version
# Update lock-file (needed to avoid invalid lock-file with outdated versions)
yarn install --mode=update-lockfile --no-immutable
