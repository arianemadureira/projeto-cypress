const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'qnk5xy',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
  },
});
