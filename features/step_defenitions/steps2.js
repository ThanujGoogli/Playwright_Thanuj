import {When, Then, Given} from "@cucumber/cucumber";
import {test, expect,chromium} from "@playwright/test";


Given('I login to ecommerce2 application', {timeout:6000},async function(){
  
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    this.page = await context.newPage();
    await this.page.goto('https://rahulshettyacademy.com/loginpagePractise/')
    // await page.locator('#username').fill('rahulshettyacademy');
    // await page.locator('#password').fill('Learning@830$3mK2');
    
});

Then('verify error message is displayed', async function () {
  
    await this.page.locator("[type='submit']").click();
    const errorMsg = this.page.locator("[style*='block']")
    const Msg = await errorMsg.textContent()
    await expect(errorMsg).toContainText('Empty')

});