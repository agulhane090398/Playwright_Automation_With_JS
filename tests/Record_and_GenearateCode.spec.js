/*
npx playwright codegen -> to generate code for the actions performed in the browser
npx playwright codegen --browser chromium -> to generate code for the actions performed in the browser in chromium browser
npx playwright codegen --browser chromium --output=tests/Record_and_GenearateCode.spec.js -> to generate code for the actions performed in the browser in chromium browser and save it to the specified file
npx playwright codegen --device=iPhone 13 -> to generate code for the actions performed in the browser in iPhone 13 device
npx playwright codegen --viewport=1280x720 -> to generate code for the actions performed in the browser with the specified viewport size
*/


import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoblaze.com/index.html');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('aniket');
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill('pass');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill('admin123');
  await page.getByText('Close Log in').click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').dblclick();
  await page.locator('#loginusername').fill('pavanol');
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').press('ControlOrMeta+a');
  await page.locator('#loginpassword').fill('test@123');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Phones' }).click();
  await page.goto('about:blank');
  await page.getByRole('link', { name: 'About us' }).click();
  await page.locator('#videoModal').getByLabel('Close').click();
  await expect(page.getByRole('link', { name: 'Welcome pavanol' })).toBeVisible();
  await expect(page.locator('#tbodyid')).toContainText('ASUS Full HD');
  await expect(page.locator('#tbodyid')).toMatchAriaSnapshot(`
    - link:
      - /url: prod.html?idp_=14
    - heading "ASUS Full HD" [level=4]:
      - link "ASUS Full HD":
        - /url: prod.html?idp_=14
    - heading /\\$\\d+/ [level=5]
    - paragraph: /ASUS VS247H-P \\d+\\.\\d+- Inch Full HD/
    `);
});