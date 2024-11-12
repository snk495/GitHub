const { test, expect } = require('@playwright/test');
const Luma = require('./page-objects/create-account');
const generateRandomString = require('../../../util/random-string-gen/random-string-gen');
const CreateAccountSelectors = require('./page-objects/create-account-selectors');

test.describe('Create Account Page', () => {
    
    const luma = new Luma();

    test.beforeEach(async ({ page }) => {
        //Arrange
        await luma.navigate(page, 'https://magento.softwaretestingboard.com/customer/account/create/');
    });

    test('should populate the form fields with valid values and successfully submit', async ({ page }) => {
        //Act
        const email = 'test' + generateRandomString() + '@test.com';
        const validValues = [
            'John', 
            'Doe', 
            email,
            'Password!23',
            'Password!23'
        ];
        await luma.populateForm(page, validValues);
        await page.locator(CreateAccountSelectors.createAccountButton).click();
        //Assert
        expect(page.locator(CreateAccountSelectors.pageTitle)).toContainText('My Account');
    });
});