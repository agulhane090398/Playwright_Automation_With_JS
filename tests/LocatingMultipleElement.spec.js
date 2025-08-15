import {test, expect} from '@playwright/test';

test("Locating Multiple Elements", async ({ page }) => {
    await page.goto('https://demoblaze.com/index.html');


    // const links = await page.$$("a")
    // for (const link of links) {
    //     const text = await link.textContent();
    //     console.log('Link text:', text);
    // }

    //product 
    await page.waitForSelector("//div[@id='tbodyid']//h4/a"); // Wait for product titles to load
    const products = await page.$$("//div[@id='tbodyid']//h4/a"); // Get all product titles
    await console.log('Number of products found:', products.length);
    for (const product of products) {
        const productName = await product.textContent();
        console.log('Product name:', productName);
    }


    await page.close();
    console.log('Test completed successfully');
}
)