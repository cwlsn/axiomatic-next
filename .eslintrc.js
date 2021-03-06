module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
    'prettier/react',
  ],
  plugins: ['react-hooks', 'jsx-a11y', 'no-only-tests'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'no-only-tests/no-only-tests': 'error',
    'no-console': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react/prop-types': 'off',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
      },
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'prettier/@typescript-eslint',
      ],
      rules: {
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
      },
    },
  ],
};
