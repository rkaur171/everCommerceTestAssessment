// @ts-check
import { test, expect } from "@playwright/test"

test("Verify dynamic content is generated when page is refreshed", async({ page }) => {
    await page.goto("/");

    //Page 1
    await expect(page.getByRole('heading', { name: 'Welcome to the-internet' })).toBeVisible();
    await expect(page.locator('h1')).toContainText('Welcome to the-internet');
    await expect(page.getByRole('heading', { name: 'Available Examples' })).toBeVisible();
    await expect(page.locator('h2')).toContainText('Available Examples');
    await expect(page.getByRole('img', { name: 'Fork me on GitHub' })).toBeVisible();
    await expect(page.locator('#page-footer')).toBeVisible();
    await expect(page.locator('#page-footer')).toContainText('Powered by Elemental Selenium');
    await expect(page.getByRole('link', { name: 'Dynamic Content' })).toBeVisible();
    await expect(page.getByRole('list')).toContainText('Dynamic Content');
    await page.getByRole('link', { name: 'Dynamic Content' }).click();

    //Page 2
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/dynamic_content')
    await expect(page.getByRole('heading', { name: 'Dynamic Content' })).toBeVisible();
    await expect(page.getByRole('heading')).toContainText('Dynamic Content');
    await expect(page.getByText('This example demonstrates the')).toBeVisible();
    await expect(page.locator('body')).toContainText('This example demonstrates the ever-evolving nature of content by loading new text and images on each page refresh.');
    await expect(page.getByText('To make some of the content')).toBeVisible();
    await expect(page.locator('body')).toContainText('To make some of the content static append ?with_content=static or click here.');
    await expect(page.getByRole('img', { name: 'Fork me on GitHub' })).toBeVisible();
    await expect(page.getByRole('img').nth(1)).toBeVisible();
    await expect(page.getByRole('img').nth(2)).toBeVisible();
    await expect(page.getByRole('img').nth(3)).toBeVisible();

    //Visual validation with screenshot
    await expect.soft(page).not.toHaveScreenshot()

    //Web page reloaded
    await page.reload();

    await expect(page.getByRole('img').nth(1)).toBeVisible();
    await expect(page.getByRole('img').nth(2)).toBeVisible();
    await expect(page.getByRole('img').nth(3)).toBeVisible();

    //Visual validation with screenshot
    await expect.soft(page).not.toHaveScreenshot()

    await expect(page.locator('#page-footer')).toBeVisible();
    await expect(page.locator('#page-footer')).toContainText('Powered by Elemental Selenium');

    await page.close();

})