class Luma {
    /**
    * @param {import('@playwright/test').Page} page
    * @param {string} url
    */
    async navigate(page, url) {
        await page.goto(url);
    }

    /**
    * @param {import('@playwright/test').Page} page
    */
    async populateForm(
        page, 
        inputValues = [
            'firstName', 
            'lastName', 
            'email', 
            'password', 
            'confirmPassword'
    ]) {
        const {
            firstNameInput,
            lastNameInput,
            emailInput,
            passwordInput,
            confirmPasswordInput
        } = require('./create-account-selectors');

        await page.locator(firstNameInput).fill(inputValues[0]);
        await page.locator(lastNameInput).fill(inputValues[1]);
        await page.locator(emailInput).fill(inputValues[2]);
        await page.locator(passwordInput).fill(inputValues[3]);
        await page.locator(confirmPasswordInput).fill(inputValues[4]);
    }

    /**
    * @param {import('@playwright/test').Page} page
    * @returns {Promise<string[]>}
    */
    async getRequiredErrors(page) {
        const {
            createAccountButton,
            requiredFieldErrors, 
        } = require('./create-account-selectors');
                
        await page.locator(createAccountButton).click();

        const requiredErrors = await page.locator(requiredFieldErrors).allInnerTexts();

        return requiredErrors;
    }
}

module.exports = Luma;