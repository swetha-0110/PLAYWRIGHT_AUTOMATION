const { chromium } = require("@playwright/test");

const  config={
  testDir: './tests' ,
  retries:1,
  timeout: 30 * 1000,
  expect: {
    timeout: 8000
  },

  reporter: 'html' ,
  projects: [
    {
      name:'safari',
      use: {
      browserName : 'webkit',   
     headless : true,
     screenshot : 'on',
     trace : 'retain-on-failure',
     ...devices['iPhone 11'],

      }
    },
    {
      name: 'chrome',
      use: {
      browserName : 'chromium ',   
      headless : false,
      screenshot : 'on',
      video: 'retain-on-failure'.
      ignoreHttpsErrors:true,
      permissions:['geolocation'],
      trace : 'on',
      viewport: {width:720,height:720}
    } 


  },

]

};
module.exports= config;