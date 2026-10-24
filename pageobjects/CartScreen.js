import {expect} from '@playwright/test';
export class CartScreen{

    constructor(page){
        this.page = page;
        this.cartitem = page.locator('.cart li');
        this.checkoutButton = page.locator('.totalRow button');
        this.countryInput = page.locator('[placeholder*=Country]');
        this.dropdown = page.locator('.ta-results button');
        this.submitButton = page.locator('.actions a');
        this.orderConfirmationText = page.locator(".hero-primary");
        this.orderId = page.locator(".em-spacer-1 .ng-star-inserted");
        this.emailId = page.locator(".user__name [type='text']").first();
    }

    async goToCheckout(){
        await this.cartitem.first().waitFor();
        await this.checkoutButton.click();
    }
    async placeOrder(country){
        await this.countryInput.pressSequentially('ind');
        await this.dropdown.first().waitFor();
        const coun= await this.dropdown.count();
        for(let i=0; i< coun; i++){

        let text = await this.dropdown.nth(i).textContent()
        if(text.trim()===country){
            await this.dropdown.nth(i).click()
            break;
        }
        }
        await this.submitButton.click();
    }
    async VerifyEmailId(username)
    {
        await expect(this.emailId).toHaveText(username);
    }
    
    async SubmitAndGetOrderId()
    {
        
     await expect(this.orderConfirmationText).toHaveText(" Thankyou for the order. ");
     return await this.orderId.textContent();
    }

}
