const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'uap4i3',
  e2e: {
    baseUrl: 'http://localhost:3003',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx}'
  },
  experimentalFetchPolyfill: true,
  experimentalInteractiveRunEvents: true,
  experimentalStudio: true,
  experimentalModifyObstructiveThirdPartyCode: true,
  experimentalSourceRewriting: true
})
