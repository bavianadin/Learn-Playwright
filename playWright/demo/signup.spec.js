// const { test, expect } = import('@playwright/test');
import { test, expect } from '@playwright/test';

// Gunakan 'describe' untuk mengelompokkan test yang relevan
test.describe('Fitur Signup', () => {

  // Step yang selalu dijalankan sebelum tiap test case
  test.beforeEach(async ({ page }) => {
    await page.goto(''); 
  });

  test('User bisa Signup', async ({ page }) => {
    const isVisible = await page.locator('.col-sm-4').first().isVisible();
    await page.getByRole('link', { name: ' Signup / Login' }).click();
    await page.getByRole('textbox', { name: 'Name' }).fill('Nugraha');
    const randomEmail = `user${Date.now()}@gmail.com`;
    await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill(randomEmail);
    await page.getByRole('button', { name: 'Signup' }).click({ timeout: 5000 });
    await expect(page).toHaveURL('https://automationexercise.com/signup');
    await page.getByRole('radio', { name: 'Mr.' }).click();
    await page.getByRole('textbox', { name: 'Password *' }).fill('Nugraha22');
    await page.locator('#days').click();
    await page.locator('#days').selectOption('2');
    await page.locator('#months').click();
    await page.locator('#months').selectOption('March');
    await page.locator('#years').click();
    await page.locator('#years').selectOption('1999');
    await page.getByRole('textbox', { name: 'First name *' }).fill('Nugraha');
    await page.getByRole('textbox', { name: 'Last name *' }).fill('Adi');
    await page.getByRole('textbox', { name: 'Address * (Street address, P.' }).fill('St Malang 2');
    await page.getByLabel('Country *').click();
    await page.getByLabel('Country *').selectOption('India');
    await page.getByRole('textbox', { name: 'State *' }).fill('Jatim');
    await page.getByRole('textbox', { name: 'City * Zipcode *' }).fill('Malang');
    await page.locator('#zipcode').fill('22001');
    await page.getByRole('textbox', { name: 'Mobile Number *' }).fill('085232443044');
    await page.getByRole('button', { name: 'Create Account' }).click();
    await expect(page).toHaveURL('https://automationexercise.com/account_created'); 
  });
});