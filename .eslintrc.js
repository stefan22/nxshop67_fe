module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/recommended',
    'next',
    'next/core-web-vitals',
    'prettier'
  ],
  plugins: ['react', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 13,
    sourceType: 'module'
  },
  rules: {
    'react/react-in-jsx-scope': 0,
    'unused-default-export': 0,
    'react/prop-types': 0,
    'import/no-unresolved': 0,
    'import/no-named-as-default': 0,
    '@typescript-eslint/no-unsafe-assignment': 0,
    'react/jsx-props-no-spreading': 0,
    'import/prefer-default-export': 0,
    'import/no-default-export': 0,
    'no-param-reassign': 0,
    'no-console': 1,
    'no-unsafe-optional-chaining': 0,
    'react/jsx-no-useless-fragment': 0,
    'import/no-mutable-exports': 0,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
        js: 'never'
      }
    ],
    'import-resolver-webpack': 0,
    'consistent-return': 0,
    'no-underscore-dangle': 0,
    'arrow-body-style': 0,
    'prefer-arrow-callback': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-curly-brace-presence': 0,
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function'
      }
    ],
    'prettier/prettier': 'warn'
  }
}
