const { chromium } = require("@playwright/test");

const  config={
  testDir: './tests' ,
  timeout: 30 * 1000,
  expect: {
    timeout: 8000
  },

  reporter: 'html' ,
  use: {
     browserName : 'chromium',   
     headless : false,
     screenshot : 'on',
     trace : 'retain-on-failure',

  },

};

module.exports= config;