const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'uap4i3',
  e2e: {
    // baseUrl: process.env.FRONTEND_URL_DEV,
    specPattern:'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}'

  }
})
