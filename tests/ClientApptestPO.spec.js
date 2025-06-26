const{test,expect} = require('@playwright/test');
const{customtest}= require('../utils/test-base');

const{POManager} = require('../pageobjects/POManager');
const{dataset} = JSON.parse(JSON.stringify(require('../Utils/ClientApptestPOTestData.json')));


for(const data of dataset)
{

test(`@Web Client App Login ${data.productName}`, async({page})=>
    {
      const poManager= new POManager(page);
      const loginPage= poManager.getLoginPage();
      await loginPage.LandOn();
      await loginPage.ValidLogin(data.username,data.password);
      const dashboardPage= poManager.getDashBoardPage();
      await dashboardPage.searchProducts(data.productName);
      await dashboardPage.navigateToCart();
      const cartPage= poManager.getCartPage();
      await cartPage.productVerification(data.productName);
      await cartPage.checkOutVerification();
      const ordersReviewPage =poManager.getOrdersReviewPage();
      await ordersReviewPage.searchCountryAndSelect("ind","India");
      const orderId= await ordersReviewPage.SubmitAndGetOrderId();
      console.log(orderId);
      await dashboardPage.navigateToOrders();
      const orderHistoryPage= poManager.getOrdersHistoryPage();
      await orderHistoryPage.searchOrderAndSelect(orderId);
      expect(orderId.includes(await orderHistoryPage.getOrderId())).toBeTruthy();
    }); 
  }


  customtest.only(`Client App Login`, async({page,testDataFororder})=>
    {
      const poManager= new POManager(page);
      const loginPage= poManager.getLoginPage();
      await loginPage.LandOn();
      await loginPage.ValidLogin(testDataFororder.username,testDataFororder.password);
      const dashboardPage= poManager.getDashBoardPage();
      await dashboardPage.searchProducts(testDataFororder.productName);
      await dashboardPage.navigateToCart();
      const cartPage= poManager.getCartPage();
      await cartPage.productVerification(testDataFororder.productName);
      await cartPage.checkOutVerification();
      const ordersReviewPage =poManager.getOrdersReviewPage();
      await ordersReviewPage.searchCountryAndSelect("ind","India");
      const orderId= await ordersReviewPage.SubmitAndGetOrderId();
      console.log(orderId);
      await dashboardPage.navigateToOrders();
      const orderHistoryPage= poManager.getOrdersHistoryPage();
      await orderHistoryPage.searchOrderAndSelect(orderId);
      expect(orderId.includes(await orderHistoryPage.getOrderId())).toBeTruthy();
    }); 
  