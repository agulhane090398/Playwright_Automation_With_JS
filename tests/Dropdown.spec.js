const {test, expect} = require('@playwright/test');

test('Dropdown Testing', async ({ page }) => {
        await page.goto('https://testautomationpractice.blogspot.com/');

//         await page.locator("#country").selectOption({ label: 'India' }); // select option by label
//         await page.locator("#country").selectOption( 'Japan' ); // select option by label
//         await page.locator("#country").selectOption({ value: 'uk' }); // select option by value if available
//         await page.locator("#country").selectOption({ index: 5 }); // select option by index


//         // Assert the selected option
//         const selectedOption = await page.locator("#country").inputValue();
//         expect(selectedOption).toBe('australia'); // Change this to the expected value based on your selection

//         // Assert the dropdown is enabled
//         await expect(page.locator("#country")).toBeEnabled();

//         // count
//         // dropdown locator - #country
//         // dropdown options locator - #country option
//         const optionsCount = await page.locator("#country option").count();
//         console.log(`Number of options in the dropdown: ${optionsCount}`);
//         await expect(optionsCount).toBeGreaterThan(0); // Ensure there are options in the dropdown
//         await expect(page.locator("#country option")).toHaveCount(10); // Assert the count of options in the dropdown


// //3) check presence of value in the dropdown Appraoch1
//         const content = await page.locator('#country').textContent()
//         await expect(content.includes('India')).toBeTruthy();

//         const options = await page.$$("#country option")
//         console.log('Options in the dropdown:')
//         for (const option of options) {
//             const value = await option.textContent();
//             console.log(value);
//         }

//     //4) check presence of value in the dropdown Approach 2 using looping
//     const optionss = await page.$$('#country option')
//     let status=false;
//     for(const option of optionss)
//     {
//         //console.log(await option.textContent())
//         let value = await option.textContent();
//         if(value.includes ('France'))
//         {
//             status=true;
//             break;
//         }
//     }
//     expect(status).toBeTruthy();

// // //4) Select value in the dropdown using looping
// //     const optionns = await page.$$('#country option')
// //     for(const option of optionns)
// //     {
// //         let value = await option.textContent();
// //         if(value.includes('India'))
// //         {
// //             await page.selectOption(value);
// //             break;
// //         }
// //     }


//     //5) select option from dropdown using loop
//         const optios=await page.$$('#country option')
//         for(const option of optios)
//         {
//             let value  = await option.textContent();
//             if(value.includes ('France'))
//             {
//                 await page.selectOption('#country', { value: 'france' });  // ✅
//                 break;
//             }
//         }


        //select multiple options from dropdown
        await page.locator('#colors').selectOption(['Red', 'Blue', 'Yellow']); // select multiple options by value
        
        //Assertions
        // 1) check number of options in dropdown
        let opts = await page.locator('#colors option')   // gives locator of elements
        await expect(opts).toHaveCount(7);

        // 2) check number of options in dropdown using JS array
        const ops=await page.$$('#colors option')   //gives array of elements
        //console.log("Number of options:", options.length)
        await expect(ops.length).toBe (7);

        // 3) check if option is selected
        const selectedOptions = await page.locator('#colors option:checked').allTextContents();
        console.log('Selected options:', selectedOptions);

        await page.waitForTimeout(5000); // pausing code
})