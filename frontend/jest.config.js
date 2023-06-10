module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'frontend/**/*.js(x)?',
    '!frontend/styles/**/*.js',
    '!frontend/features/**/*.js',
    '!frontend/utils/test/*.js'
  ],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  modulePaths: ['<rootDir>/'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/**/$1',
    '^styled-components':
      '<rootDir>/node_modules/styled-components/dist/styled-components.browser.cjs.js'
  }
}
