const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // These settings apply everywhere unless overridden
  defaultCommandTimeout: 5000,
  viewportWidth: 1440,
  viewportHeight: 800,
  // Viewport settings overridden for component tests
  component: {
    viewportWidth: 1440,
    viewportHeight: 800,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // Base URL for current project
    baseUrl: "https://ultimateqa.com/simple-html-elements-for-automation/",
    // Viewport options
    viewportWidth: 1440,
    viewportHeight: 800,
  },
});


