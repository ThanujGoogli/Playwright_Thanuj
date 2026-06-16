import {test,expect} from '@playwright/test';

test('Client App Login',async({page})=>{

    //Login Page
    const email = "thanujgoogli@gmail.com"
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
    await page.locator('#userEmail').fill(email)
    await page.locator('#userPassword').fill('Test@1234')
    await page.locator('#login').click()

    //Home Screen
    const productname = "ZARA COAT 3"
    let country = " India"
    const products = page.locator('.card-body')
    expect(await page.locator("//p[text()='Automation Practice']").textContent()).toContain('Automation')
    await page.locator('.card-body b').first().waitFor()
    const count = await products.count();

    //Adding Product in Cart
    for(let i=0;i<count;i++){

        if(await products.nth(i).locator('b').textContent() === productname){

            await products.nth(i).locator('text= Add To Cart').click()
            break
        }
    }
    //Verify Product in Cart
    await page.locator('[routerlink*=cart]').click()
    await page.locator('.cart li').first().waitFor()
    const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible()
    expect(bool).toBeTruthy()

    //Go to Checkout screen
    await page.locator('.totalRow button').click()
    
    //Verify Cart screen
    expect(await page.locator('.user__name label').textContent()).toContain(email)
    await page.locator('[placeholder*=Country]').pressSequentially('ind')
    await page.locator('.ta-results').first().waitFor()
    const dropdown = page.locator('.ta-results button')
    const coun= await dropdown.count()
    // console.log(dropdown)
    for(let i=0; i< coun; i++){

        let text = await dropdown.nth(i).textContent()
        if(text===country){
            await dropdown.nth(i).click()
            break;
        }
    }
    await page.locator('.actions a').click()
    expect(await page.locator('.hero-primary').textContent()).toContain(' Thankyou for the order. ')
    const orderNumber = await page.locator('label.ng-star-inserted').textContent()
    //Orders Page
    await page.locator("button[routerlink*='myorders']").click()
    await page.locator('tbody tr').first().waitFor()
    const TableRows = page.locator('tbody tr')
    const RowNumber = await TableRows.count()
    // console.log(RowNumber)
    for(let i =0;i< RowNumber;i++){

        let text = await TableRows.nth(i).locator('th').textContent()
        if(orderNumber.includes(text)){

            await TableRows.nth(i).locator('button').first().click()
            break;
        }
    }
    
    //Order confirmation Page

    const confirmOrderID = await page.locator('.col-text').textContent()
    expect(orderNumber.includes(confirmOrderID)).toBeTruthy()



})