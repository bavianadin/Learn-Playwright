// const { test, expect } = import('@playwright/test');
import { test, expect } from '@playwright/test';

// Gunakan 'describe' untuk mengelompokkan test yang relevan
test.describe('Checkout', () => {

  // Step yang selalu dijalankan sebelum tiap test case
  test.beforeEach(async ({ page }) => {
    await page.goto(''); 
  });

  test('User bisa checkout', async ({ page }) => {
    await page.mouse.wheel(100, 1000);
    await page.getByText('Rs. 500 Blue Top Add to cart Rs. 500 Blue Top Add to cart View Product').hover();
    await page.locator('.overlay-content > .btn').first().click();
    const addedText = page.getByRole('heading', { name: 'Added!' });
    await expect(addedText).toContainText('Added!');
    await page.getByRole('button', { name: 'Continue Shopping' }).click();
    await page.getByText('Rs. 400 Men Tshirt Add to cart Rs. 400 Men Tshirt Add to cart View Product').hover();
    await page.locator('div:nth-child(4) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn').click();
    await page.getByRole('link', { name: 'View Cart' }).click();
    await expect(page).toHaveURL('https://automationexercise.com/view_cart');
    await page.getByText('Proceed To Checkout').click();

  });
});