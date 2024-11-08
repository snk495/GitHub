const { test, expect } = require('@playwright/test');
const Luma = require('./page-objects/create-account');

const luma = new Luma();

test.describe('Create Account Page', () => {
    test('should populate the form fields', async ({ page }) => {
        await luma.navigate(page, 'https://magento.softwaretestingboard.com/customer/account/create/');
        await luma.populateForm(page);
    });
});