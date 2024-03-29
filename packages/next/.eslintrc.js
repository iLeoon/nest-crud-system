module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  extends: [
    "next/core-web-vitals",
    "airbnb",
    "airbnb-typescript", 
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    "linebreak-style": 0,
    "import/extensions": ["error", "never"],
    "react/jsx-props-no-spreading": "off",
    "import/prefer-default-export": "off",
    "import/no-extraneous-dependencies": ["error", "never"],
    "@typescript-eslint/naming-convention": [
      "error",
      {
        "selector": "default",
        "format": ["camelCase", "PascalCase", "snake_case"]
      }
    ],
    "comma-dangle": ["error", "never"],
    "@typescript-eslint/comma-dangle": "off"
  },
};
