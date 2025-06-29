import { test, expect } from '@playwright/test';

test('Test myNote HSP + login + profile', async ({ page }) => {
  await page.goto('https://vyvoj.mydock.sab-apps.blogic.cz/web-mynote');

  await page.getByRole('textbox', { name: 'moje-firma' }).click();
  await page.getByRole('textbox', { name: 'moje-firma' }).fill('vyvoj.mydock.sab-apps');
  await page.getByRole('button', { name: 'Pokračovat' }).click();

  await expect(page.getByText('Přihlášení')).toBeVisible();

  await page.getByRole('textbox', { name: 'Přihlašovací jméno' }).click();
  await page.getByRole('textbox', { name: 'Přihlašovací jméno' }).fill('majitel');
  await page.getByRole('textbox', { name: 'Přihlašovací jméno' }).press('Tab');
  await page.getByRole('textbox', { name: 'Heslo' }).fill('majitel');
  await page.getByRole('button', { name: 'Přihlásit' }).click();

  await expect(page.getByRole('heading', { name: 'Zapnout biometrii' })).toBeVisible();
  await page.getByRole('button', { name: 'Zrušit' }).click();
  
  await expect(page.getByRole('paragraph').filter({ hasText: 'Dashboard' })).toBeVisible();
  await page.getByRole('button').filter({ hasText: /^$/ }).click();
  await expect(page.getByText('Profil poradce')).toBeVisible();
});
