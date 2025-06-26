import{chromium,test} from "@playwright/test"

test("login test",  async({})=>
{
 const browser = await chromium.launch();
 const context =  await browser.newContext();
 const page    = await context.newPage();
})