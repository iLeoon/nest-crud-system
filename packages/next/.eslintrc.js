module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      project: 'tsconfig.json',
      tsconfigRootDir: __dirname,
    },
    extends: [
        "next/core-web-vitals", 
        "airbnb", 
        "airbnb-typescript"
    ],
    ignorePatterns: ['.eslintrc.js'],
    rules: {
      "linebreak-style": ["error", "windows"]
    },
  };
  