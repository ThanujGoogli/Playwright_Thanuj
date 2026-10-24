import {loginPage} from '../pageobjects_ts/loginPage';
import {DashboardPage} from '../pageobjects/DashboardPage';
import {CartScreen} from '../pageobjects_ts/CartScreen';
import {OrderHistorypage} from '../pageobjects_ts/OrderHistorypage';
import {Page} from '@playwright/test';
export class POManager{

    lp:loginPage;
    dashboard:DashboardPage
    cart:CartScreen;
    OrderHistoryPage:OrderHistorypage;
    page:Page;

    constructor(page:any){
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