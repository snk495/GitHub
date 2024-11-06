import { Page } from '@playwright/test';
import { HeaderSelectors } from './header-selectors';

export class Luma {
    private page: Page;

    constructor(page: Page) {
      this.page = page;
    }

    async navigate(url: string) {
      await this.page.goto(url);
    }

   async search(term: string) {
      await this.page.locator(HeaderSelectors.searchInput).fill(term);
      await this.page.locator(HeaderSelectors.searchButton).click();
    }
}