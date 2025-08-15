import {test, expect} from '@playwright/test';

test('Check Boxes Test', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    //single checkbox
    await page.locator("//input[@id='monday' and @type='checkbox']").check();
    //await page.check("//input[@id='monday' and @type='checkbox']");
    expect(await page.locator ("//input[@id='monday' and @type='checkbox']")).toBeChecked();
    expect(await page. locator("//input[@id='monday' and @type='checkbox']").isChecked()).toBeTruthy();

    await page.waitForTimeout(5000); //pausing code
    expect(await page.locator("//input[@id='tuesday' and @type='checkbox']").isChecked()).toBeFalsy();   //assertion with true/false value

    //Multiple checkbox

    const checkboxLocators  = [
                    "//input[@id='monday' and @type='checkbox']",
                    "//input[@id='sunday' and @type='checkbox']",
                    "//input[@id='saturday' and @type='checkbox']"
                    ];
    for(const locator of checkboxLocators) // select multiple checkboxes
    {
        await page.locator(locator).check();
    }
    await page.waitForTimeout(5000); //pausing code

    for(const locator of checkboxLocators) // unselect multiple checkboxes which are already selected
    {
        if (await page.locator (locator).isChecked())
        {
        await page.locator(locator).uncheck();
        }
    }
    await page.waitForTimeout(5000); //pausing code

})