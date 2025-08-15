// const {test, expect} = require('@playwright/test')
// or
import {test, except} from '@playwright/test';
// async : to run code asynchronously
// await : to wait for the code to complete execution
test("Locators Testing", async ({ page }) => {
    await page.goto('https://demoblaze.com/index.html');

    // Example of using a locator to find an element
    // await page.locator('locator').click();
    // await page.click('locator');

    // click on login button
    await page.locator('id=login2').click();      //with xpath
    // await page.click('id=login2');    

    await page.locator('#loginusername').fill('testuser');      //with css
    // await page.fill('#loginusername','testuser');      //with css
    await page.locator('#loginpassword').type('testpass');      //with css

    // await page.click("class=btn btn-primary");
    await page.click("//button[normalize-space()='Log in']");

    const logoutButton = await page.locator("//a[normalize-space()='Log out']");
    await expect(logoutButton).toBeVisible();
    // await expect(page).toBeVisible("//a[normalize-space()='Log out']");

    // const elements = await page.$$(locator);
    const elements = await page.locator('a').all(); // Get all anchor elements 
    console.log('Number of elements found: ', elements.length);

    await page.close();
    console.log('Test completed successfully');
    }
)