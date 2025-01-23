const{ When,Then,Given } = require('@cucumber/cucumber')
const{POManager} = require('../../pageobjects/POManager')
const{expect}= require('@playwright/test')
const playwright = require('@playwright/test')


         Given('login to Ecommerce application with {string} and {string}', async function (username,password) {
           // Write code here that turns the phrase above into concrete actions
           const browser = await playwright.chromium.launch();
           const context = await browser.newContext();
           const page = await context.newPage();
           this.poManager= new POManager(page);
           const loginPage=this.poManager.getLoginPage();
           await loginPage.LandOn();
           await loginPage.ValidLogin(username,password);
});

   

         When('Add {string} to  Cart', async function (productName) {
           // Write code here that turns the phrase above into concrete actions
           this.dashboardPage= this.poManager.getDashBoardPage();
           await this.dashboardPage.searchProducts(productName);
           await this.dashboardPage.navigateToCart();
           
         });

   

         Then('Verify {string} is displayed in the Cart', async function (productName) {
           // Write code here that turns the phrase above into concrete actions
           const cartPage= this.poManager.getCartPage();
          await cartPage.productVerification(productName);
          await cartPage.checkOutVerification();
        
         });

   

         When('Enter valid details and place the Order', async function () {
           // Write code here that turns the phrase above into concrete actions
           const ordersReviewPage = this.poManager.getOrdersReviewPage();
          await ordersReviewPage.searchCountryAndSelect("ind","India");
          this.orderId= await ordersReviewPage.SubmitAndGetOrderId();
          console.log(this.orderId);
         });

   

         Then('Verify order is present in the OrderHistory',async function () {
           // Write code here that turns the phrase above into concrete actions
           await this.dashboardPage.navigateToOrders();
      const orderHistoryPage= this.poManager.getOrdersHistoryPage();
      await orderHistoryPage.searchOrderAndSelect(this.orderId);
      expect(this.orderId.includes(await orderHistoryPage.getOrderId())).toBeTruthy();
         });
