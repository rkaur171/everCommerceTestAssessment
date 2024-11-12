// @ts-check
import { test, expect } from "@playwright/test"

test("User is attempting to retrieve the password with empty email field", async({ page }) => {
    await page.goto("/");

    //Page 1
    await expect(page.getByRole('heading', { name: 'Welcome to the-internet' })).toBeVisible();
    await expect(page.locator('h1')).toContainText('Welcome to the-internet');
    await expect(page.getByRole('heading', { name: 'Available Examples' })).toBeVisible();
    await expect(page.locator('h2')).toContainText('Available Examples');
    await expect(page.getByRole('img', { name: 'Fork me on GitHub' })).toBeVisible();
    await expect(page.locator('#page-footer')).toBeVisible();
    await expect(page.locator('#page-footer')).toContainText('Powered by Elemental Selenium');
    await expect(page.getByRole('link', { name: 'Forgot Password' })).toBeVisible();
    await expect(page.getByRole('list')).toContainText('Forgot Password');
    await page.getByRole('link', { name: 'Forgot Password' }).click();

    //Page 2
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/forgot_password');
    await expect(page.getByRole('heading', { name: 'Forgot Password' })).toBeVisible();
    await expect(page.locator('h2')).toContainText('Forgot Password');
    await expect(page.getByText('E-mail')).toBeVisible();
    await expect(page.locator('label')).toContainText('E-mail');
    await expect(page.getByLabel('E-mail')).toBeVisible();
    await expect(page.getByRole('img', { name: 'Fork me on GitHub' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Retrieve password' })).toBeVisible();
    await expect(page.locator('#form_submit')).toContainText('Retrieve password');
    await page.getByRole('button', { name: 'Retrieve password' }).click();

    //Page 3
    await expect(page.getByRole('heading', { name: 'Internal Server Error' })).toBeVisible();
    await expect(page.getByRole('heading')).toContainText('Internal Server Error');

    await page.close();
})

test("User is attempting to retrieve the password with email", async({ page }) => {
    await page.goto("/");

    //Page 1
    await expect(page.getByRole('heading', { name: 'Welcome to the-internet' })).toBeVisible();
    await expect(page.locator('h1')).toContainText('Welcome to the-internet');
    await expect(page.getByRole('heading', { name: 'Available Examples' })).toBeVisible();
    await expect(page.locator('h2')).toContainText('Available Examples');
    await expect(page.getByRole('img', { name: 'Fork me on GitHub' })).toBeVisible();
    await expect(page.locator('#page-footer')).toBeVisible();
    await expect(page.locator('#page-footer')).toContainText('Powered by Elemental Selenium');
    await expect(page.getByRole('link', { name: 'Forgot Password' })).toBeVisible();
    await expect(page.getByRole('list')).toContainText('Forgot Password');
    await page.getByRole('link', { name: 'Forgot Password' }).click();

    //Page 2
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/forgot_password');
    await expect(page.getByRole('heading', { name: 'Forgot Password' })).toBeVisible();
    await expect(page.locator('h2')).toContainText('Forgot Password');
    await expect(page.getByText('E-mail')).toBeVisible();
    await expect(page.locator('label')).toContainText('E-mail');
    await expect(page.getByLabel('E-mail')).toBeVisible();
    await expect(page.getByRole('img', { name: 'Fork me on GitHub' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Retrieve password' })).toBeVisible();
    await expect(page.locator('#form_submit')).toContainText('Retrieve password');
    await page.getByLabel('E-mail').fill("rup@gmail.com");
    await page.getByRole('button', { name: 'Retrieve password' }).click();

    //Page 3
    await expect(page.getByRole('heading', { name: 'Internal Server Error' })).toBeVisible();
    await expect(page.getByRole('heading')).toContainText('Internal Server Error');

    await page.close();
})