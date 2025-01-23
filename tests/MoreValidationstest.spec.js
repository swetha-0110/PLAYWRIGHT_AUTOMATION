const {test,expect} = require('@playwright/test')

test("Popup Validations", async({page})=>
{
 await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
// await page.goto("https://google.com");
// await page.goBack();
// await page.goForward();
await expect(page.locator("#displayed-text")).toBeVisible();
await page.locator("#hide-textbox").click();
await expect(page.locator("#displayed-text")).toBeHidden();
// await page.pause();
await page.locator("#confirmbtn").click();
page.on('dialog', dialog => dialog.accept());
await page.locator("#mousehover").hover();
const framepage = page.frameLocator("courses-iframe");
await framepage.locator("li a[href*='lifetime-access']:visible").click();
const textcheck = await framepage.locator(".text h2").textContent();
console.log(textcheck.split(" ")[1]);

})

test("Screenshot & Visual comparision", async({page})=>
    {
     await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
     await expect(page.locator("#displayed-text")).toBeVisible();
     await page.locator("#displayed-text").screenshot({path: 'partialscreenshot.png'});
     await page.locator("#hide-textbox").click();
     await page.screenshot({path: 'screenshot.png'});
     await expect(page.locator("#displayed-text")).toBeHidden();
    // await page.pause();
    })
test.only('visual',async({page})=>
{
 await page.goto("https://google.com");
 expect(await page.screenshot()).toMatchSnapshot('landing.png');  

})
