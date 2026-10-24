import {When, Then, Given} from "@cucumber/cucumber";
import {test, expect,chromium} from "@playwright/test";
import {POManager} from "../../pageobjects/POManager.js";

Given('I login to ecommerce application with {string} and {string}',{timeout: 60000}, async function (username, password) {
    
    
    const lp = this.poManager.getLoginPage();
    await lp.goTo();
    await lp.Login(username, password);
});

When('Add {string} to cart', async function (productName) {
  
    const dashboard = this.poManager.getDashboardPage();
    await dashboard.searchProduct(productName);
    await dashboard.goToCart(); 
});

Then('Place order  by selecting country as {string} and verify order in order history', async function (country) {
  
    const cart = this.poManager.getCartScreen();
    await cart.goToCheckout();
    await cart.placeOrder(country);
    // await cart.VerifyEmailId(dataSet.username);
    this.orderNumber= await cart.SubmitAndGetOrderId();
});

When('Verify the order id in order history matches the order id in confirmation page', async function () {
  
    const ordersHistoryPage = this.poManager.getOrdersHistoryPage();
    await ordersHistoryPage.confirmOrderID(this.orderNumber);
    expect(this.orderNumber.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();
});

