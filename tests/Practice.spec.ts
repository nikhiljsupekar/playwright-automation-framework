
import {test,expect} from '@playwright/test';

test('Radio button ', async ({page}) => {
  await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
  await page.getByText('Radio1', { exact: true }).click();
  //await expect(page.getByText('Radio1', { exact: true })).toBeChecked();
  await page.getByText('Radio2', { exact: true }).click();
  //await expect(page.getByText('Radio2', { exact: true })).toBeChecked();
  //await expect(page.getByText('Radio1', { exact: true })).not.toBeChecked();

});

test('text box', async ({page}) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    await page.getByPlaceholder('Type to Select Countries').fill('ind');
    await page.waitForTimeout(2000);


});

test('Drop down testing', async ({page}) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    await page.selectOption('#dropdown-class-example', 'option2');
    await expect(page.locator('#dropdown-class-example')).toHaveValue('option2');
    await page.waitForTimeout(2000);
});

test('checkbox testing', async ({page}) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
   const checkboxes = page.locator('input[type="checkbox"]');
   const count = await checkboxes.count();

   for (let i = 0; i < count; i++) {

       await checkboxes.nth(i).check();
       await page.waitForTimeout(2000);
       await checkboxes.nth(i).uncheck();
       await page.waitForTimeout(2000);
}

});

test('Switch to new window', async ({page}) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    const [newPage] = await Promise.all([
        page.waitForEvent('popup'),
        page.getByText('Open Window', { exact: true }).click(),
    ]);
    await page.waitForTimeout(2000);

  });

  test('Switch to new tab', async ({page}) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    const [newPage] = await Promise.all([
        page.waitForEvent('popup'),
        page.locator(`#opentab`).click(),
    
    ]);
    await page.waitForTimeout(2000);

  });

  test('Switch to alert', async ({page}) => {
   page.on('dialog', async dialog => {
    console.log(dialog.message());
    await page.waitForTimeout(2000)
    await dialog.dismiss(); // clicks Cancel
});
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    await page.getByText('Alert', { exact: true }).click();
    await page.waitForTimeout(2000);
    })

  test('Switch to Confirmation', async ({page}) => {
   page.on('dialog', async dialog => {
    console.log(dialog.message());
    await page.waitForTimeout(2000)
    await dialog.accept(); // clicks OK
});
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    await page.getByText('Confirm', { exact: true }).click();
    await page.waitForTimeout(2000);
    })

 test('Web table testing', async ({page}) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    const rows =  page.locator(`table[name="courses"]`);
   
    const count = await rows.count(); 
    for (let i = 0; i < count; i++) {
        const rowText = await rows.nth(i).textContent();
        if (rowText?.includes('Learn SQL in Practical + Database Testing from Scratch')) {
            const columns = rows.nth(i).locator('td');
            const price = await columns.nth(2).textContent();

            console.log(`Price of SQL course: ${price}`);
            break;
        } 

    }
});

test('Mouse hover testing', async ({page}) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    const element = page.locator('#mousehover');
    await element.scrollIntoViewIfNeeded();
    await page.waitForTimeout(2000)
    await page.locator('#mousehover').hover();
    await page.waitForTimeout(2000)
    await page.getByText('Top', { exact: true }).click();
    await page.waitForTimeout(2000);
});

test('Iframe handling best practice', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

   
    const frame = page.frameLocator('#courses-iframe');
     
    const homeButton = frame.locator('.current');
    await homeButton.getByRole('link', { name: 'Home' }).click();
    await page.waitForTimeout(2000);
});


