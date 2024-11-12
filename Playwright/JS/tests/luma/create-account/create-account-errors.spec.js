const { test, expect } = require('@playwright/test');
const Luma = require('./page-objects/create-account');

test.describe('Create Account Page - Errors', () => {
    
    const luma = new Luma();

    test.beforeEach(async ({ page }) => {
        //Arrange
        await luma.navigate(page, 'https://magento.softwaretestingboard.com/customer/account/create/');
    });

    test('should return required field error for every form field', async ({ page }) => {
        //Act
        const requiredErrors = await luma.getRequiredErrors(page);
        //Assert
        expect(requiredErrors).toContain('This is a required field.');
        expect(requiredErrors).toHaveLength(5);
    })
});