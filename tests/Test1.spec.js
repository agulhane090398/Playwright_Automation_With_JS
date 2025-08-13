const { test, expect } = require('@playwright/test');

test('Launch browser and verify title', async ({ page }) => {
    await page.goto('https://nodejs.org/en/download');
    await expect(page).toHaveTitle('Node.js — Download Node.js®');
    const pageUrl = page.url();
    console.log('Page URL: ', pageUrl);
    await expect(page).toHaveURL('https://nodejs.org/en/download');
});

// Run testcases from terminal:
// npx playwright test      #runs all test on all browser(chromium/firfox/safari) in headless mode
// npx playwright test testcaseName.spec.js     #runs specific file on all browser in headless mode
// npx playwright test testcaseName.spec.js --project=chromium      #runs specisic file on specific browser in headless mode
// npx playwright test testcaseName.spec.js --project=chromium --headed         #runs specisic file on specific browser in headed mode
// npx playwright test testcaseName.spec.js --project=chromium --headed --debug     #runs specisic file on specific browser in headed mode and can debug using devtools