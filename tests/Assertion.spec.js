const {test, expect} = require('@playwright/test');

test('Assertion Testing', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    
    // Verify the title of the page
    await expect(page).toHaveTitle('OrangeHRM');
    
    // Verify the URL of the page
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    
    // Verify that the login form is visible
    const loginForm = await page.locator('form'); // Assuming the login form is a <form> element
    await expect(loginForm).toBeVisible();
    
    // Verify that the username input field is enabled
    const usernameInput = await page.locator('input[name="username"]');
    await expect(usernameInput).toBeEnabled();
    
    // Verify that the password input field is disabled (if applicable)
    const passwordInput = await page.locator('input[name="password"]');
    await expect(passwordInput).toBeDisabled(); // This assumes the password field is disabled for some reason
    
// 1) expect (page).toHaveURL() Page has URL
// 2) expect(page).toHaveTitle() Page has title
// 3) expect(locator).toBeVisible()Element is visible
// 4) expect(locator).toBeEnabled() expect(locator).toBeDisabled() Control is enabled Element is disabled
// 5) expect(locator).toBeChecked()  Radio/Checkbox is checked
// 6) expect(locator).toHaveAttribute()  Element has attribute
// 7) expect(locator).toHaveText()  Element matches text
// 8) expect(locator).toContainText()  Element contains text
// 9) expect(locator).toHaveValue(value)  Input has a value
// 10) expect(locator).toHaveCount()  List of elements has given length

// 1) expect(locator).not.toHaveCount()  Negative assertion for count
// 2) expect(locator).not.toBeVisible()  Negative assertion for visibility etc....

    // Close the page after assertions
    await page.close();
})