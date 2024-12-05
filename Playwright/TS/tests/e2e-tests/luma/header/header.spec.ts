import { test, expect } from '@playwright/test';
import { Luma } from './page-objects/header.ts';
import { HeaderSelectors } from './page-objects/header-selectors.ts';

test.describe('Luma - Header', () => {

    let luma: Luma

    test.beforeEach(async ({ page }) => {
        //Arrange
        luma = new Luma(page);
        await luma.navigate('https://magento.softwaretestingboard.com');
    });
    
    test('Global message is visible', async ({ page }) => {
        //Assert
        expect(page.locator(HeaderSelectors.globalMessage)).toBeVisible();
    });

    test('Company logo is visible', async ({ page }) => {
        //Assert
        expect(page.locator(HeaderSelectors.lumaLogo)).toBeVisible();
    });

    test('Sign In returns sign in page when selected', async ({ page }) => {
        //Act
        await page.locator(HeaderSelectors.signInLink).click();
        //Assert
        expect(page.locator(HeaderSelectors.pageTitle)).toContainText('Customer Login')
    });

    test('Create an Account returns account creation page when selected', async ({ page }) => {
        //Act
        await page.locator(HeaderSelectors.createAcountLink).click();
        //Assert
        expect(page.locator(HeaderSelectors.pageTitle)).toContainText('Create New Customer Account')
    });

    test('Search returns results page when submitted', async ({ page }) => {
        //Act
        await luma.search('t-shirt');
        //Assert
        expect(page.locator(HeaderSelectors.pageTitle)).toContainText('Search results for: \'t-shirt\'')
    });

    test('Cart button shows cart dropdown dialog', async ({ page }) => {
        //Act
        await page.locator(HeaderSelectors.cartButton).click();
        //Assert
        expect(page.locator(HeaderSelectors.cartDropdownDialog)).toBeVisible();
    });

});