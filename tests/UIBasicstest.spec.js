import {test,expect} from '@playwright/test';

test('Page Playwright test',async({page})=>{


    // Login Page

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/')
    await page.locator('#username').fill('rahulshettyacademy');
    await page.locator('#password').fill('Learning@830$3mK2');
    await page.locator("[type='submit']").click();
    // await page.locator('#username').fill(""); -> removes the entered data

    //Product Page
    // console.log(await page.locator('.card-title a').nth(1).textContent()) //Get particular element from the array
    // console.log(await page.locator('.card-title a').first().textContent()) //Get the first element from the array
    // await page.waitForLoadState('networkidle')  // Wait until all network calls are completed. (But this is flaky)
    await page.locator('.card-title a').first().waitFor()
    const allTitles = await page.locator('.card-title a').allTextContents();  // This event will not wait until the DOM content loads - so we grab the first element and call this event
    console.log(allTitles)
})

test('To Capture the Error message',async({page})=>{


    await page.goto('https://rahulshettyacademy.com/loginpagePractise/')
    // await page.locator('#username').fill('rahulshettyacademy');
    // await page.locator('#password').fill('Learning@830$3mK2');
    await page.locator("[type='submit']").click();
    const errorMsg = page.locator("[style*='block']")
    const Msg = await errorMsg.textContent()
    await expect(errorMsg).toContainText('Empty')
    
})

test('Browser Context test',async({browser})=>{

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.google.com')
    console.log( await page.title())
    await expect(page).toHaveTitle('Google')
})

test('UI Basics',async({page})=>{

    const document_link = page.locator("[href*='documents-request']")
    //Dropdown with Select tag
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/')
    const dropdown = await page.locator('select.form-control')
    await dropdown.selectOption('teach')
    // await page.pause()
    await page.locator('span.radiotextsty').last().click()
    await page.locator('#okayBtn').click()
    await expect(page.locator('span.radiotextsty').last().isChecked())

    //CheckBox
    await page.locator('#terms').click()
    await expect(page.locator('#terms')).toBeChecked()
    await page.locator('#terms').uncheck()
    expect(await page.locator('#terms').isChecked()).toBeFalsy()

    await expect(document_link).toHaveAttribute('class','blinkingText')
})

test.only('Child Window Handle',async({browser})=>{


    const context = await browser.newContext()
    const page = await context.newPage()
    const document_link = page.locator("[href*='documents-request']")
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/')
    
    const [newPage] = Promise.all([      //To execute asynchronous steps

        context.waitForEvent('page'),
        document_link.click()
    ])

    // await newPage.locator('')
    
})