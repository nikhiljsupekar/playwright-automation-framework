
const {test, expect} = require('@playwright/test');

test('Assert element count', async ({page}) => {
  await page.goto('https://www.saucedemo.com/');
  const elements = await page.locator('.login-box')

  await expect(elements).toHaveCount(5);

});

test('iframe test', async ({page}) => {
  await page.goto('https://www.saucedemo.com/');
  const frame = page.frameLocator('#my-iframe');
  await frame.getByRole('button', { name: 'Submit' }).click();
});

test('dropdown test', async ({page}) => {
  await page.goto('https://www.saucedemo.com/');
  await page.selectOption('#my-dropdown', 'option2');
}); 

test('alert test', async ({page}) => {
  await page.goto('https://www.saucedemo.com/');
  await page.getByRole('button', { name: 'Alert' }).click();
  await page.waitForTimeout(1000);
});

test('dialog test', async ({page}) => {
  page.on('dialog', async dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    await dialog.accept();
  });

  test('multiple windows test', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');
    const [newPage] = await Promise.all([   

        page.waitForEvent('popup'), 
        page.getByRole('button', { name: 'Open New Window' }).click(),
    ]);

    await newPage.waitForLoadState();
    console.log(`New page URL: ${newPage.url()}`);
  });

  test('take screenshot test', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');
    await page.screenshot({ path: 'screenshot.png' });
  });   

  test('element screenshot test', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');
    const element = await page.locator('.login-box');
    await element.screenshot({ path: 'element-screenshot.png' });
  });

  test('test with timeout', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');
    await page.waitForTimeout(5000); // Wait for 5 seconds
  });

  test('test with retry', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');
    await page.getByRole('button', { name: 'Flaky Button' }).click();
  });   
  
  test('scroll page test', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');
    await page.evaluate(() => window.scrollBy(0, 500)); // Scroll down by 500 pixels
  });   

  test('scroll element into view test', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');
    const element = await page.locator('.footer');
    await element.scrollIntoViewIfNeeded();
  });   

    test('hover test', async ({page}) => {
        await page.goto('https://www.saucedemo.com/');
        await page.getByRole('button', { name: 'Hover Me' }).hover();
    });

    test('drag and drop test', async ({page}) => {
        await page.goto('https://www.saucedemo.com/');
        const source = await page.locator('#draggable');
        const target = await page.locator('#droppable');
        await source.dragTo(target);
    }); 

});