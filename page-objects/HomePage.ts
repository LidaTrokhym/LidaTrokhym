import {expect, Page} from '@playwright/test';

export class HomePage {
    public page: Page;

constructor(page: Page) {
        this.page = page;
}
async checkHomeURL() {
    await expect(this.page).toHaveURL('https://gitlab.testautomate.me/dashboard/projects');
  }
}