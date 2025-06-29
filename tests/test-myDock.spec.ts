import { test, expect } from '@playwright/test';

test('Test myDock login + Tasker', async ({ page }) => {
    const baseUrl = process.env.TEST_URL || 'https://vyvoj.mydock.sab-apps.blogic.cz/';
    await page.goto(baseUrl);

    expect(page).toHaveURL(baseUrl);

    const loginLocator = page.getByRole('textbox', { name: 'přihlašovací jméno' });
    await expect(loginLocator).toBeVisible();
});
