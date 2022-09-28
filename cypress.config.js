const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'uap4i3',
  e2e: {
    baseUrl: process.env.FRONTEND_URL_DEV,
    defaultCommandTimeout: 10000,
  }
})
