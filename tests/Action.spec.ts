import { expect, test, type Page } from '@playwright/test';
import { InventoryPage } from './pages/InventoryPage';
import { LoginPage } from './pages/LoginPage';

const validCredentials = {
  username: 'standard_user',
  password: 'secret_sauce',
};

async function login(page: Page) {
  const loginPage = new LoginPage(page);
  await loginPage.login(validCredentials.username, validCredentials.password);
  await loginPage.expectLoggedIn();
  return new InventoryPage(page);
}

test.describe('Sauce Demo UI actions', () => {
  test('add to cart button is clickable', async ({ page }) => {
    const inventoryPage = await login(page);
    const addButton = page.locator('.inventory_item').first().getByRole('button', { name: 'Add to cart' });
    await expect(addButton).toBeVisible();
    await expect(addButton).toBeEnabled();

    await addButton.click();
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
  });

  test('hover over inventory item does not break UI and item title is visible', async ({ page }) => {
    await login(page);

    const firstItemCard = page.locator('.inventory_item').first();
    const itemName = firstItemCard.locator('.inventory_item_name');

    await itemName.hover();

    // On Sauce Demo, hover should not hide the text; ensure item remains visible and stable
    await expect(itemName).toBeVisible();
  });

  test('product sort dropdown works (select Price (low to high))', async ({ page }) => {
    await login(page);

    const sortDropdown = page.locator('[data-test="product_sort_container"]');
    await expect(sortDropdown).toBeVisible();

    // verify dropdown options exist
    const options = await sortDropdown.locator('option').allTextContents();
    await expect(options).toEqual(expect.arrayContaining([
      'Name (A to Z)',
      'Name (Z to A)',
      'Price (low to high)',
      'Price (high to low)',
    ]));

    await sortDropdown.selectOption('lohi');
    await expect(sortDropdown).toHaveValue('lohi');

    // The first item when sorted low->high should be cheapest item (e.g. Sauce Labs Onesie)
    const firstName = page.locator('.inventory_item_name').first();
    await expect(firstName).toHaveText(/Sauce Labs Onesie|Sauce Labs Bolt T-Shirt/);
  });
});
