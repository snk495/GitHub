import { Page } from '@playwright/test';

export class Luma {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
      }

    async navigate() {
        await this.page.goto('https://magento.softwaretestingboard.com');
        //await this.page.waitForLoadState('domcontentloaded');
   }
}