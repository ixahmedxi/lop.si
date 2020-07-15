module.exports = {
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: [
    'standard-with-typescript',
    'react-app',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:eslint-comments/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:promise/recommended',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'plugin:unicorn/recommended',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
    'plugin:testing-library/react',
    'plugin:jest-dom/recommended',
    'prettier/react',
    'prettier/@typescript-eslint'
  ],
  env: {
    node: true,
    jest: true,
    browser: true
  },
  rules: {
    // Theme UI requires null to skip breakpoints
    'unicorn/no-null': 0,

    // Pascal case for component file namings
    'unicorn/filename-case': [
      'error',
      {
        cases: {
          camelCase: true,
          pascalCase: true
        }
      }
    ],

    '@typescript-eslint/no-unused-vars': [
      1,
      { vars: 'all', args: 'all', varsIgnorePattern: '^jsx$' }
    ],

    // Next.js does not need React to be in the scope
    'react/react-in-jsx-scope': 0,

    // common abbreviations are known such as props
    'unicorn/prevent-abbreviations': 0,

    // typescript types are used for props validations
    'react/prop-types': 0,

    // helps in creating better organised components
    'react/destructuring-assignment': 2,

    // conflicts with the custom render function
    '@typescript-eslint/no-unsafe-assignment': 0,

    // conflicts with the custom render function
    '@typescript-eslint/no-unsafe-call': 0,

    // react-testing-library can test without expect
    'jest/expect-expect': 0,

    '@typescript-eslint/no-unsafe-member-access': 0
  }
}
