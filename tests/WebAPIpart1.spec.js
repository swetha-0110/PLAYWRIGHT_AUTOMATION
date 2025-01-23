const{test, expect, request } = require('@playwright/test');
const{APIUtils} = require('./Utils/APIUtils');
const LoginPayLoad={userEmail: "anshika@gmail.com",userPassword: "Iamking@000"};
const orderPayLoad={"orders":[{country:"Cuba",productOrderedId:"6581ca979fd99c85e8ee7faf"}]};
let response;

 test.beforeAll( async()=>
 {
   
    const apiContext = await request.newContext();
    const apiUtils = new APIUtils(apiContext,LoginPayLoad);
    response = await apiUtils.createOrder(orderPayLoad);
  
});

 

test('Client App Login', async({page})=>
    {
     
        page.addInitScript(value => {
            window.localStorage.setItem('token', value);
        },response.token );
       await page.goto("https://rahulshettyacademy.com/client/");
      await page.locator("button[routerlink*='myorders']").click();
      await page.locator("tbody").waitFor();
      const rows = await  page.locator("tbody tr");
      const rCount = await rows.count();
      console.log(rCount);

     for(let i=0; i<rCount; i++)
     {
    const roworderID = await rows.nth(i).locator("th").textContent();
    if(response.orderID.includes(roworderID))
    {
      await rows.nth(i).locator("button").first().click();
      break;
    }
     }
  const orderIddetails  = await page.locator(".col-text").textContent();
  await page.pause();
  expect(response.orderID.includes(orderIddetails)).toBeTruthy();












     




       




    });

