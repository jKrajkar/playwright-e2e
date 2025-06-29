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

    const contactsBtnLocator = page.getByRole('link', { name: 'kontakty' });
    await expect(contactsBtnLocator).toBeVisible();
    await contactsBtnLocator.click();

    const contactsHeadingLocator = page.getByRole('heading', { name: 'Kontakty' });
    await expect(contactsHeadingLocator).toBeVisible();
    
    const addContactBtnLocator = page.getByRole('link', { name: 'přidat kontakt' });
    await expect(addContactBtnLocator).toBeVisible();
    await addContactBtnLocator.click();

    const createContactBtnLocator = page.getByRole('button', { name: 'Vytvořit kontakt', exact: true });
    await expect(createContactBtnLocator).toBeVisible();
    await expect(createContactBtnLocator).toBeDisabled();

    const nameInputLocator = page.getByRole('textbox', { name: 'Jméno:' });
    await expect(nameInputLocator).toBeVisible();
    await nameInputLocator.click();
    await nameInputLocator.fill("Kapr je ryba");
    await expect(createContactBtnLocator).toBeVisible();
});
