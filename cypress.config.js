const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://testautomationpractice.blogspot.com',
    pageLoadTimeout: 120000, 
  },
});
