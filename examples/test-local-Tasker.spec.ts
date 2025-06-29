import { test, expect } from '@playwright/test';

test.use({ ignoreHTTPSErrors: true });

test('Test local Tasker login + task edit', async ({ page, browserName }) => {
    test.skip(browserName === 'webkit', 'Tento test nespouštět ve WebKit (Safari).');
    await page.goto('http://vyvoj.mydock.lh:3002/web-mydock');

    const loginTitleLocator = page.getByRole('heading', { name: 'Přihlášení' });
    await expect(loginTitleLocator).toBeVisible({timeout: 120_000});

    const locator = page.getByRole('button', { name: 'Přihlásit' });
    await expect(locator).not.toBeVisible();

    const loginLocator = page.getByRole('textbox', { name: 'Přihlášení' });
    await expect(loginLocator).toBeVisible();
    await loginLocator.click();
    await loginLocator.fill('majitel');

    const passwordLocator = page.getByRole('textbox', { name: 'Heslo' });
    await expect(passwordLocator).toBeVisible();
    await passwordLocator.click();
    await passwordLocator.fill('majitel');

    const buttonLocator = page.getByRole('button', { name: 'Přihlásit' });
    await expect(buttonLocator).toBeVisible();
    await buttonLocator.click();

    const dashboardTitleLocator = page.locator('header').getByText('Dashboard');
    await expect(dashboardTitleLocator).toBeVisible({timeout: 120_000});

    const taskerBtnLocator = page.getByRole('button', { name: 'Úkolovník' });
    await expect(taskerBtnLocator).toBeVisible();
    await taskerBtnLocator.click();

    const taskerTitleLocator = page.getByText('Úkolovník');
    await expect(taskerTitleLocator).toBeVisible({timeout: 120_000});

    const newTaskBtnLocator = page.getByRole('button', { name: 'Nový úkol' });
    await expect(newTaskBtnLocator).toBeVisible();
    await newTaskBtnLocator.click();

    const modalHeaderLocator = page.getByText('Nový úkolInformace o úkoluNá');
    await expect(modalHeaderLocator).toBeVisible();

    const nameInputLocator = page.getByRole('textbox', { name: 'Název' });
    await expect(nameInputLocator).toBeVisible();
    await nameInputLocator.click();
    await nameInputLocator.fill("foo");
    const warningMsgLocator = page.getByText('Musí být alespoň 5 znaků');
    await expect(warningMsgLocator).toBeVisible();
    await nameInputLocator.fill("Kapr je ryba");
    await expect(warningMsgLocator).not.toBeVisible();
});
