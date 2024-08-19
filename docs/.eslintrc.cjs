module.exports = {
  root: true,
  extends: [
    'next/core-web-vitals',
    'plugin:react/recommended',
    'standard-with-typescript',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    project: './tsconfig.json',
    // // tsconfigRootDir: __dirname,
    // ecmaVersion: 'latest',
    // sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    //
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    //
    'array-callback-return': 'off',
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/consistent-type-imports': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
  },
};
