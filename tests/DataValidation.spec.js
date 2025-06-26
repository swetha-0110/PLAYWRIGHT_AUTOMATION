const{test,expect} = require('@playwright/test');
const { chromium } = require('playwright');
 //const{customtest}= require('../tests/DataValidation.spec.js');
//const{VD}= JSON.parse(JSON.stringify(require('../tests-examples/testdata.json')));
//const storedData = require('./testdata.json');
// const _ = require('lodash');
const fs = require('fs');
//const jsonData = JSON.parse(fs.readFileSync('C:/Playwright_Automation/testdata.json', 'utf-8');
//const path= require('path');
//const _ =require('lodash');



test('DataValidation' , async ({page}) => {

    const data = JSON.parse(fs.readFileSync('./tests/testdata.json', 'utf-8'));
    console.log(data);








    
   
    


    

 
        

    

   // const browser = await chromium.launch();
   // const page = await browser.newPage();
    await page.goto("https://www.demoblaze.com/index.html");
    await page.locator("#login2").click();
    await page.locator("#loginusername").fill("komako");
    await page.locator("#loginpassword").fill("lane");
   // await page.locator("button[onclick='logIn()']").click();
   await Promise.all([
    page.waitForNavigation(), // Ensure the page navigation is complete
    page.locator("button[onclick='logIn()']").click(),
]);
    await page.waitForTimeout(3000); 

    // Extract product details
    const products = await page.locator("//div[@class='card-block']").all(); // Fetch product elements
    console.log('Product count:', products.length);

    // Prepare an array to store retrieved data
    const retrievedData = [];
    for(let i=0; i<products.length; i++){
        const title = await products[i].locator("//h4").textContent();
        const price = await products[i].locator("//h5").textContent();
        const description = await products[i].locator("//p").textContent();
      
        retrievedData.push({
            title: title.trim(),
            price: price.trim(),
            description: description.trim(),
        });
    }
    console.log('Retrieved Data:', JSON.stringify(retrievedData, null, 2));
    console.log(String(data).trim() === String(retrievedData).trim() ? 'Data matches' : 'Data mismatch');
});

