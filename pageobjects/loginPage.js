class loginPage{

    

    constructor(page){

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

    async Login(username,password){

        await this.username.type(username);
        await this.password.type(password);
        await this.signin.click();
    }
}
module.exports={loginPage};