module.exports = {
  root: true,
  extends: ['next', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'react/react-in-jsx-scope': 0,
    'next/link-passhref': 0,
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
      0,
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
    'no-unused-vars': [0, { args: 'after-used', argsIgnorePattern: '^_' }],
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
