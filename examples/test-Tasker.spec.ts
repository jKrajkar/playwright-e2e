import { test, expect } from '@playwright/test';

test('Test myDock login + Tasker', async ({ page }) => {
    await page.goto('https://vyvoj.mydock.sab-apps.blogic.cz/');

    const loginLocator = page.getByRole('textbox', { name: 'přihlašovací jméno' });
    await expect(loginLocator).toBeVisible();
    await loginLocator.click();
    await loginLocator.fill('majitel');

    const passwordLocator = page.getByRole('textbox', { name: 'heslo' });
    await expect(passwordLocator).toBeVisible();
    await passwordLocator.click();
    await passwordLocator.fill('majitel');

    const buttonLocator = page.getByRole('button', { name: 'přihlásit' });
    await expect(buttonLocator).toBeVisible();
    await buttonLocator.click();

    const HSPLinkLocator = page.getByRole('link', { name: 'TESTOVACI HSP [majitel]' });
    await expect(HSPLinkLocator).toBeVisible();

    const taskerButtonLocator = page.getByRole('listitem').filter({ hasText: /^6$/ }).getByRole('link');
    await expect(taskerButtonLocator).toBeVisible({timeout: 120_000});
    await taskerButtonLocator.click();

    const taskerTitleLocator = page.getByText('Úkolovník');
    await expect(taskerTitleLocator).toBeVisible({timeout: 30_000});

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
