const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  e2e: {
    pageLoadTimeout: 180000,
    specPattern: "cypress/e2e/**/*.feature",
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

      on("file:preprocessor", bundler);

      await addCucumberPreprocessorPlugin(on, config);

      return config;
    },
    supportFile: "cypress/support/e2e.js",
    pageLoadTimeout: 300000,  // 5 minutes
    defaultCommandTimeout: 30000, // (Optional) increase default command timeout to 30 seconds

    // Add reporter configuration here
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: true,
      json: true,
      timestamp: 'yyyy-mm-dd_HH-MM-ss',
    }
  },
});
