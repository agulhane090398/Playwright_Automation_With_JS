import {test, expect} from '@playwright/test';

test('Radio Button Test', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
//Radio button
await page. locator("//*[@id='male']").check()    //click action
//male
//await page.check("//input[@value='option2']");
await expect(await page.locator("//*[@id='male']")).toBeChecked();     //assertion
await expect(await page.locator("//*[@id='male']").isChecked()).toBeTruthy();   //assertion with true/false value

await page.waitForTimeout(5000); //pausing code
await expect(await page.locator("//*[@id='female']").isChecked()).toBeFalsy();   //assertion with true/false value

})