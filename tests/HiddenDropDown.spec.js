 const {test, expect} = require('@playwright/test');

 test('Hidden Dropdown Testing', async ({ page }) => {
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        await page.locator("[name='username']").fill('Admin');
        await page.locator("[name='password']").fill('admin123');
        await page.locator("[type='submit']").click();
        await page. locator("//span[normalize-space()='PIM']").click()
        await page.waitForTimeout(5000);

        await page.locator("//body/div[@id='app']/div[@class='oxd-layout orangehrm-upgrade-layout']/div[@class='oxd-layout-container']/div[@class='oxd-layout-context']/div[@class='orangehrm-background-container']/div[@class='oxd-table-filter']/div[@class='oxd-table-filter-area']/form[@class='oxd-form']/div[@class='oxd-form-row']/div[@class='oxd-grid-4 orangehrm-full-width-grid']/div[6]/div[1]/div[2]/div[1]/div[1]").click();
        const options=await page.$$("//div[@role='listbox']//span")   // use selectorHub "turn on debugger" option to get the locator
        for(let option of options)
        {
            const jobTitle=await option.textContent();
            console.log(jobTitle);
            if(jobTitle.includes ('QA Engineer')){
                await option.click();
                break;
            }
        }

        await page.waitForTimeout(5000);
    })