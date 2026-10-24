export class OrderHistorypage{

    constructor(page){

        this.page = page;
        this.ordersButton = page.locator("button[routerlink*='myorders']");
        this.tableRows = page.locator('tbody tr').first();
        this.orderdIdDetails =page.locator(".col-text");

    }

    async confirmOrderID(orderNumber){

        await this.ordersButton.click();
        await this.tableRows.waitFor();
        const RowNumber = await this.tableRows.count();

        for(let i =0;i< RowNumber;i++){

        let text = await this.tableRows.nth(i).locator('th').textContent()
        if(orderNumber.includes(text)){

            await this.tableRows.nth(i).locator('button').first().click()
            break;
        }
    }
    }
    async getOrderId()
{
    return await this.orderdIdDetails.textContent();
    }

}
