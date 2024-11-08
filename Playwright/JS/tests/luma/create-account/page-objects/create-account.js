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
    async populateForm(page) {
        const {
            firstNameInput,
            lastNameInput,
            emailInput,
        } = require('./create-account-selectors');

        await page.locator(firstNameInput).fill('John');
        await page.locator(lastNameInput).fill('Doe');
        await page.locator(emailInput).fill('john.doe@example.com');
    }
}

module.exports = Luma;