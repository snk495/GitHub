import { test, expect } from '@playwright/test';
import { Luma } from './page-objects/luma.ts';
import { LumaSelectors } from './page-objects/luma-selectors.ts';

test.describe('Luma - Homepage', () => {

    let luma: Luma

    test.beforeEach(async ({ page }) => {
        //Arrange
        luma = new Luma(page);
        await luma.navigate();
    });

    test('Company logo is present', async ({ page }) => {
        //Assert
        expect(page.locator(LumaSelectors.lumaLogo)).toBeVisible();
    });
});