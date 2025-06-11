import { Page, expect } from '@playwright/test';

export class StakeholdersPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('/stakeholders');
  }

  async searchStakeholder(stakeholderName: string) {
    await this.page.getByRole('textbox', { name: 'Search' }).click();
    await this.page.getByRole('textbox', { name: 'Search' }).fill(stakeholderName);
    await this.page.getByRole('textbox', { name: 'Search' }).press('Enter');
    await expect(this.page.getByText(stakeholderName, { exact: true })).toBeVisible();
    await this.page.getByText(stakeholderName, { exact: true }).click();
  }

  async addProjectToStakeholder(projectName: string, stakeholderName: string, actionName: string){
    await this.page.getByText(stakeholderName, { exact: true }).click();
    await this.page.getByRole('button', { name: 'Create new action' }).click();
    await this.page.getByRole('textbox', { name: 'Action Name' }).click();
    await this.page.getByRole('textbox', { name: 'Action Name' }).fill(actionName);
    await this.page.getByRole('combobox', { name: 'Project' }).click();
    await this.page.getByText(projectName).click();
    await this.page.mouse.click(0, 0); //todo:  I can probably use a better way to ignore the dropdown blocking submit button
    await this.page.getByRole('button', { name: 'Submit' }).click();
  }
}