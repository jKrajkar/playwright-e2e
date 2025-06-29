import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://vyvoj.mydock.lh:3002/web-mydock');
  await page.getByRole('textbox', { name: 'Přihlášení' }).click();
  await page.getByRole('textbox', { name: 'Přihlášení' }).fill('foo');
  await page.getByRole('textbox', { name: 'Přihlášení' }).press('Tab');
  await page.getByRole('textbox', { name: 'Heslo' }).fill('bar');
  await page.getByRole('button', { name: 'Přihlásit' }).click();

  
});