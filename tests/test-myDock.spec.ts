import { test, expect } from '@playwright/test';

test('Test myDock login + Tasker', async ({ page }) => {
    await page.goto('https://vyvoj.mydock.sab-apps.blogic.cz/');

    expect(page).toHaveURL('https://vyvoj.mydock.sab-apps.blogic.cz/');

    const loginLocator = page.getByRole('textbox', { name: 'přihlašovací jméno' });
    await expect(loginLocator).toBeVisible();
});
