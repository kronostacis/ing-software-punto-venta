const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000', // Asegúrate de que tu app Next.js corra aquí
    supportFile: 'cypress/support/e2e.js', // soporte para pruebas E2E
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
  },
  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
    supportFile: 'cypress/support/component.js', // soporte para pruebas de componentes
    specPattern: 'cypress/component/**/*.cy.{js,jsx,ts,tsx}',
  },
})
