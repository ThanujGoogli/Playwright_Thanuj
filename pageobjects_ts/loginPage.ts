import {Page,Locator} from "@playwright/test";
export class loginPage{

    page:Page;
    signin:Locator;
    username:Locator;
    password:Locator;
    

    constructor(page:any){

        this.page = page;
        this.signin = page.locator('#login');
        this.username = page.locator('#userEmail');
        this.password = page.locator('#userPassword');
        this.page.waitForLoadState('networkidle');
    }
    async goTo(){
        
       await this.page.goto('https://rahulshettyacademy.com/client');
       await this.page.waitForLoadState('networkidle');
    }

    async Login(username:string,password:string){

        await this.username.type(username);
        await this.password.type(password);
        await this.signin.click();
    }
}
