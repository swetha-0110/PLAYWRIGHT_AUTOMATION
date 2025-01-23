const {test,expect} = require('@playwright/test');
const { text } = require('stream/consumers');


test('Browser Context Playwright test', async({browser})=>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    const userName = page.locator("#username");
    const signIn = page.locator('#signInBtn');
    const cardTitles = page.locator('.card-body a');
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
     console.log(await page.title());
    // await expect(page).toHaveTitle("LoginPage Practise|Rahul Shetty Academy");
      await userName.type("rahulshetty");
      await page.locator('#password').type("learning");
      await signIn.click();
     console.log(await page.locator("[style*='block']").textContent());
      await expect(page.locator("[style*='block']")).toContainText('Incorrect');
      await userName.fill("");
      await userName.fill("rahulshettyacademy");
      // race condition
      await Promise.all(
      [
         page.waitForNavigation(),
         signIn.click(),
      ]
    );
     // console.log(await cardTitles.first().textContent());
      //console.log(await cardTitles.nth(1).textContent());
     const allTitles =await cardTitles.allTextContents();
     console.log(allTitles);



});

test('UI controls'  ,async({page})=>
    {
    
       await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
       const userName = page.locator("#username");
       const signIn = page.locator('#signInBtn'); 
       const dropdown = page.locator("select.form-control");
       const downloadLink = page.locator("[href*=documents-request]");
       await  dropdown.selectOption("consult");
       await page.locator(".customradio").last().click();
       await page.locator("#okayBtn").click();
       await expect(page.locator(".customradio").last()).toBeChecked();
       console.log(await page.locator(".customradio").last().isChecked());
       await page.locator("#terms").click();
       await expect(page.locator("#terms")).toBeChecked();
       await page.locator("#terms").uncheck();
      expect(await page.locator("#terms").isChecked()).toBeFalsy();
      await expect (downloadLink).toHaveAttribute("class", "blinkingText");

});

test('Child windows handle' , async({browser})=>
 {
        const context = await browser.newContext();
        const page = await context.newPage();
        const userName = page.locator("#username");
        await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
        const documentLink = page.locator("[href*='documents-request']");

        const [newPage] =  await Promise.all ([
        context.waitForEvent('page'),
        documentLink.click(),

       ])

         // console.log(await newPage.locator('.red').textContent());


         const text = await newPage.locator(".red").textContent();
         console.log(text);
         const arrayText = text.split("@")
         const domain = arrayText[1].split(" ")[0]
         console.log(domain);
         await page.locator("#username").type(domain);
         console.log(await page.locator("#username").textContent());

         


           



    // Message = await newPage.locator('.red').textContent();
    //console.log(Message);





        








    });




