import {When, Then, Given} from "@cucumber/cucumber";
import {test, expect,chromium} from "@playwright/test";


Given('I login to ecommerce2 application using {string} and {string}', {timeout:6000},async function (username, password) {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    this.page = await context.newPage();
    await this.page.goto('https://rahulshettyacademy.com/loginpagePractise/')
    await this.page.locator('#username').fill(username);
    await this.page.locator('#password').fill(password);
});

Then('verify error message is displayed for invalid data', async function () {
  
    await this.page.locator("[type='submit']").click();
    const errorMsg = this.page.locator("[style*='block']")
    const Msg = await errorMsg.textContent()
    await expect(errorMsg).toContainText('Incorrect')

});