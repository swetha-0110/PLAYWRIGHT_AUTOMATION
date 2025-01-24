const{test,expect} = require('@playwright/test');

test('Client App Login', async({page})=>
    {

      const email ="";  
      const productName ="ADIDAS ORIGINAL";
      const products = page.locator(".card-body");
      await page.goto("https://rahulshettyacademy.com/client");
       await page.locator("#userEmail").fill("anshika@gmail.com");
       await page.locator("#userPassword").fill("Iamking@000");
       await page.locator("[value='Login']").click();
       await page.waitForLoadState('networkidle');
       const Titles =await page.locator(".card-body b").allTextContents();
       console.log(Titles);
       const Count = await products.count();
       console.log(Count);
      for(let i =0; i<Count; i++)
       {
         // add to cart
           if(await products.nth(i).locator("b").textContent()===productName)
           {
            await products.nth(i).locator("text = Add To Cart").click();
            break;
           }

         } 
         await page.locator("[routerlink*='cart']").click();
         await page.locator("div li").first().waitFor();
        const boolean = await page.locator("h3:has-text('ADIDAS ORIGINAL')").isVisible()
        expect(boolean).toBeTruthy();
        await page.locator("text=Checkout").click();
        await page.locator("[placeholder*='Country']").type("ind",{delay:100});
        const dropdown = page.locator(".ta-results");
        await dropdown.waitFor();
        const dropcount = await dropdown.locator("button").count();
        console.log(dropcount);
        for(let i=0; i<dropcount; i++)
        {
        const text = await dropdown.locator("button").nth(i).textContent();
         if(text === " India")
         {
            await dropdown.locator("button").nth(i).click();
            break;
         }
        }

       await expect(page.locator(".user__name  [type='text']").first()).toHaveText(email);
       await page.locator(".action__submit").click();
      await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
      const orderID = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
      console.log(orderID);

      await page.locator("button[routerlink*='myorders']").click();
      await page.locator("tbody").waitFor();
      const rows = await page.locator("tbody tr");
      const rCount = await rows.count();
      console.log(rCount);

     for(let i=0; i<rCount; i++)
     {
    const roworderID = await rows.nth(i).locator("th").textContent();
    if(orderID.includes(roworderID))
    {
      await rows.nth(i).locator("button").first().click();
      break;
    }
     }
  const orderIddetails  = await page.locator(".col-text").textContent();
  expect(orderID.includes(orderIddetails)).toBeTruthy();
  ABCD












     




       




    });