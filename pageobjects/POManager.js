import {loginPage} from '../pageobjects/loginPage.js';
import {DashboardPage} from '../pageobjects/DashboardPage.js';
import {CartScreen} from '../pageobjects/CartScreen.js';
import {OrderHistorypage} from '../pageobjects/OrderHistorypage.js';
export class POManager{

    constructor(page){
        this.page = page;
        this.lp = new loginPage(page);
        this.dashboard = new DashboardPage(page);
        this.cart = new CartScreen(page);
        this.OrderHistoryPage = new OrderHistorypage(page);
    }
    getLoginPage(){
        return this.lp;
    }
    getDashboardPage(){
        return this.dashboard;
    }
    getCartScreen(){
        return this.cart;
    }
    getOrdersHistoryPage(){
        return this.OrderHistoryPage;
    }
}
