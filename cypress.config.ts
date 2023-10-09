import { defineConfig } from 'cypress'

export default defineConfig({
  fixturesFolder: 'fixtures',
  screenshotsFolder: 'screenshots',
  videosFolder: 'videos',
  defaultCommandTimeout: 15000,
  e2e: {
    setupNodeEvents(on, config) {
      return require('./plugins/index.js')(on, config)
    },
    baseUrl: 'http://localhost:4000',
    specPattern: [
      'integration/**/*.cy.{js,jsx,ts,tsx}',
      'integration/cucumber/*.{feature,features}',
      'integration/cucumber/**/*.{feature,features}',

      'integration/tmp/*.{feature,features}',   // Imported Files from ../test
      'integration/tmp/**/*.{feature,features}' // Imported Files from ../test
    ],
    supportFile: 'support/index.ts',
  },
})
