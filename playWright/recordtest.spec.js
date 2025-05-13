import { test, expect } from '@playwright/test';

test('record1', async ({ page }) => {
  await page.goto('https://www.youtube.com/');
  await page.getByRole('link', { name: 'Home', exact: true }).click();
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('test');
  await page.getByRole('combobox', { name: 'Search' }).press('Enter');
});