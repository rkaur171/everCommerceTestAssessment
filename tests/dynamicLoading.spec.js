// @ts-check
import { test, expect } from "@playwright/test"

test("Verify user is able to load - Example 1: Element on page that is hidden", async({ page }) => {
    await page.goto("/")

    //Page 1
    await page.getByRole('heading', { name: 'Welcome to the-internet' }).click();
    await expect(page.getByRole('heading', { name: 'Welcome to the-internet' })).toBeVisible();
    await expect(page.locator('h1')).toContainText('Welcome to the-internet');
    await expect(page.getByRole('heading', { name: 'Available Examples' })).toBeVisible();
    await expect(page.locator('h2')).toContainText('Available Examples');
    await expect(page.getByRole('img', { name: 'Fork me on GitHub' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Dynamic Loading' })).toBeVisible();
    await expect(page.getByRole('list')).toContainText('Dynamic Loading');
    await expect(page.locator('div').filter({ hasText: 'Powered by Elemental Selenium' }).nth(1)).toBeVisible();
    await expect(page.locator('#page-footer')).toContainText('Powered by Elemental Selenium');
    await page.getByRole('link', { name: 'Dynamic Loading' }).click();

    //Page 2
    await expect(page.getByRole('heading', { name: 'Dynamically Loaded Page' })).toBeVisible();
    await expect(page.getByRole('heading')).toContainText('Dynamically Loaded Page Elements');
    await expect(page.getByText('It\'s common to see an action')).toBeVisible();
    await expect(page.locator('#content')).toContainText('It\'s common to see an action get triggered that returns a result dynamically. It does not rely on the page to reload or finish loading. The page automatically gets updated (e.g. hiding elements, showing elements, updating copy, etc) through the use of JavaScript.');
    await expect(page.getByText('There are two examples. One')).toBeVisible();
    await expect(page.locator('#content')).toContainText('There are two examples. One in which an element already exists on the page but it is not displayed. And anonther where the element is not on the page and gets added in.');
    await expect(page.getByRole('img', { name: 'Fork me on GitHub' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Example 1: Element on page' })).toBeVisible();
    await expect(page.locator('#content')).toContainText('Example 1: Element on page that is hidden');
    await expect(page.getByRole('link', { name: 'Example 2: Element rendered' })).toBeVisible();
    await expect(page.locator('#content')).toContainText('Example 2: Element rendered after the fact');
    await expect(page.locator('div').filter({ hasText: 'Powered by Elemental Selenium' }).nth(1)).toBeVisible();
    await expect(page.locator('#page-footer')).toContainText('Powered by Elemental Selenium');
    await page.getByRole('link', { name: 'Example 1: Element on page' }).click();

    //Page 3
    await expect(page.getByRole('heading', { name: 'Dynamically Loaded Page' })).toBeVisible();
    await expect(page.locator('h3')).toContainText('Dynamically Loaded Page Elements');
    await expect(page.getByRole('heading', { name: 'Example 1: Element on page' })).toBeVisible();
    await expect(page.locator('#content')).toContainText('Example 1: Element on page that is hidden');
    await expect(page.getByRole('img', { name: 'Fork me on GitHub' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Start' })).toBeVisible();
    await expect(page.getByRole('button')).toContainText('Start');
    await page.getByRole('button', { name: 'Start' }).click();
    await expect(page.locator('#loading')).toBeVisible();
    await expect(page.locator('#loading')).toContainText('Loading...');
    await expect(page.locator('#loading').getByRole('img')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Hello World!' })).toBeVisible();
    await expect(page.locator('#finish')).toContainText('Hello World!');
    await expect(page.locator('div').filter({ hasText: 'Powered by Elemental Selenium' }).nth(1)).toBeVisible();
    await expect(page.locator('#page-footer')).toContainText('Powered by Elemental Selenium');

    await page.close() 
})

test('Verify user is able to load - Example 2: Element rendered after the fact', async({ page }) => {
    await page.goto("/")

    //Page 1
    await page.getByRole('heading', { name: 'Welcome to the-internet' }).click();
    await expect(page.getByRole('heading', { name: 'Welcome to the-internet' })).toBeVisible();
    await expect(page.locator('h1')).toContainText('Welcome to the-internet');
    await expect(page.getByRole('heading', { name: 'Available Examples' })).toBeVisible();
    await expect(page.locator('h2')).toContainText('Available Examples');
    await expect(page.getByRole('img', { name: 'Fork me on GitHub' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Dynamic Loading' })).toBeVisible();
    await expect(page.getByRole('list')).toContainText('Dynamic Loading');
    await page.getByRole('link', { name: 'Dynamic Loading' }).click();

    //Page 2
    await expect(page.getByRole('heading', { name: 'Dynamically Loaded Page' })).toBeVisible();
    await expect(page.getByRole('heading')).toContainText('Dynamically Loaded Page Elements');
    await expect(page.getByText('It\'s common to see an action')).toBeVisible();
    await expect(page.locator('#content')).toContainText('It\'s common to see an action get triggered that returns a result dynamically. It does not rely on the page to reload or finish loading. The page automatically gets updated (e.g. hiding elements, showing elements, updating copy, etc) through the use of JavaScript.');
    await expect(page.getByText('There are two examples. One')).toBeVisible();
    await expect(page.locator('#content')).toContainText('There are two examples. One in which an element already exists on the page but it is not displayed. And anonther where the element is not on the page and gets added in.');
    await expect(page.getByRole('img', { name: 'Fork me on GitHub' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Example 1: Element on page' })).toBeVisible();
    await expect(page.locator('#content')).toContainText('Example 1: Element on page that is hidden');
    await expect(page.getByRole('link', { name: 'Example 2: Element rendered' })).toBeVisible();
    await expect(page.locator('#content')).toContainText('Example 2: Element rendered after the fact');
    await expect(page.locator('div').filter({ hasText: 'Powered by Elemental Selenium' }).nth(1)).toBeVisible();
    await expect(page.locator('#page-footer')).toContainText('Powered by Elemental Selenium');
    await page.getByRole('link', { name: 'Example 2: Element rendered' }).click();

    //Page 3
    await expect(page.getByRole('heading', { name: 'Dynamically Loaded Page' })).toBeVisible();
    await expect(page.locator('h3')).toContainText('Dynamically Loaded Page Elements');
    await expect(page.getByRole('heading', { name: 'Example 2: Element rendered' })).toBeVisible();
    await expect(page.locator('h4')).toContainText('Example 2: Element rendered after the fact');
    await expect(page.getByRole('img', { name: 'Fork me on GitHub' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Start' })).toBeVisible();
    await expect(page.getByRole('button')).toContainText('Start');
    await page.getByRole('button', { name: 'Start' }).click();
    await expect(page.locator('#loading')).toBeVisible();
    await expect(page.locator('#loading')).toContainText('Loading...');
    await expect(page.locator('#loading').getByRole('img')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Hello World!' })).toBeVisible();
    await expect(page.locator('#finish')).toContainText('Hello World!');
    await expect(page.locator('div').filter({ hasText: 'Powered by Elemental Selenium' }).nth(1)).toBeVisible();
    await expect(page.locator('#page-footer')).toContainText('Powered by Elemental Selenium');

    await page.close();
})