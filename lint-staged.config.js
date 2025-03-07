module.exports = {
  '*.{js,jsx,css,md}': [(files) => `prettier --write ${files.join(' ')}`],
  '*.{ts,tsx}': (files) => [
    `eslint --max-warnings 0 ${files.join(' ')}`,
    'tsc -p tsconfig.json --noEmit',
    `prettier --ignore-unknown --write ${files.join(' ')}`,
  ],
};
