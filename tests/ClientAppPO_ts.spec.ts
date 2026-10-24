import {test,expect,Fixtures} from '@playwright/test';
import {customtest} from './Utils_ts/test-base.js';
import {POManager} from '../pageobjects_ts/POManager.js';
const dataSet = JSON.parse(JSON.stringify(require('./Utils/PlaceorderTestData.json')));

test.only('Client App Login',async({page})=>{

    //Login Page
    const poManager = new POManager(page);
    const lp = poManager.getLoginPage();
    await lp.goTo();
    await lp.Login(dataSet.username, dataSet.password);

    //Home Screen

    const dashboard = poManager.getDashboardPage();
    await dashboard.searchProduct(dataSet.productName);
    await dashboard.goToCart(); 

    //Go to Checkout screen
    const cart = poManager.getCartScreen();
    await cart.goToCheckout();
    await cart.placeOrder(dataSet.country);
    // await cart.VerifyEmailId(dataSet.username);
    const orderNumber: any= await cart.SubmitAndGetOrderId();

    //Orders Page

    const ordersHistoryPage = poManager.getOrdersHistoryPage();
    await ordersHistoryPage.confirmOrderID(orderNumber);
    expect(orderNumber.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();
    



})

customtest('Client App Login using Fixtures for TestData',async({page, testDataForOrder})=>{

    //Login Page
    const poManager = new POManager(page);
    const lp = poManager.getLoginPage();
    await lp.goTo();
    await lp.Login(testDataForOrder.username, testDataForOrder.password);
})

