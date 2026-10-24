import {test,expect} from '@playwright/test';
test.describe.configure({mode:'parallel'})
test('Popup Validation',async({page})=>{


    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    // await page.goto('https://www.google.com/')
    // await page.goBack()
    // await page.goForward()

    await expect(page.locator('#displayed-text')).toBeVisible()
    await page.locator('#hide-textbox').click()
    await expect(page.locator('#displayed-text')).toBeHidden()

    //Alert/Popup

    await page.on('dialog',dialog => dialog.accept())
    await page.locator('#confirmbtn').click()

    //Mouse hover

    await page.locator('#mousehover').hover()
})

test('Popup Validation 2',async({page})=>{


    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    // await page.goto('https://www.google.com/')
    // await page.goBack()
    // await page.goForward()

    await expect(page.locator('#displayed-text')).toBeVisible()
    await page.locator('#hide-textbox').click()
    await expect(page.locator('#displayed-text')).toBeHidden()

    //Alert/Popup

    await page.on('dialog',dialog => dialog.accept())
    await page.locator('#confirmbtn').click()

    //Mouse hover

    await page.locator('#mousehover').hover()
})

test('Popup Validation 3',async({page})=>{


    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    // await page.goto('https://www.google.com/')
    // await page.goBack()
    // await page.goForward()

    await expect(page.locator('#displayed-text')).toBeVisible()
    await page.locator('#hide-textbox').click()
    await expect(page.locator('#displayed-text')).toBeHidden()

    //Alert/Popup

    await page.on('dialog',dialog => dialog.accept())
    await page.locator('#confirmbtn').click()

    //Mouse hover

    await page.locator('#mousehover').hover()
})