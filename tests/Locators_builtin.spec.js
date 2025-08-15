import {test, expect} from '@playwright/test';
test("Locators Builtin Testing", async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

//getByAltText
    const logo = await page.getByAltText('company-branding')  
    await expect(logo).toBeVisible(); // Verify that the logo is visible
//getByPlaceholder
    const usernameInput = await page.getByPlaceholder('Username'); // Get the username input field
    await usernameInput.fill('Admin'); // Fill the username input field
    await page.getByPlaceholder('Password').fill('admin123'); // Fill the password input field
//getByRole
    await page.getByRole('button', { type: 'submit' }).click(); // Click the login button
//getByText
    // await expect(page.getByText('Naziha employee')).toBeVisible(); // Verify that the employee name is visible
    const name = await page.locator('//p[@class="oxd-userdropdown-name"]').allTextContents();
    await expect(name).toBeVisible(); // Verify that the employee name is visible

    await page.close();
    console.log('Test completed successfully');
})