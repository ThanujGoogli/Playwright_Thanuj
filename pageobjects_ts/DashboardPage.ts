import {Page,Locator} from "@playwright/test";
export class DashboardPage{

    page:Page;
    products:Locator;
    productsText:Locator;
    cart:Locator;

    constructor(page:any){

        this.page = page;
        this.products = page.locator('.card-body');
        this.productsText = page.locator('.card-body b');
        this.cart = page.locator('[routerlink*=cart]');
    }

    async searchProduct(productName:string){


     await this.productsText.first().waitFor();
     const count = await this.products.count();

    //Adding Product in Cart
    for(let i=0;i<count;i++){

        if(await this.products.nth(i).locator('b').textContent() === productName){

            await this.products.nth(i).locator('text= Add To Cart').click()
            break
        }
    }
    }
    async goToCart(){
        await this.cart.click();
    }
}

