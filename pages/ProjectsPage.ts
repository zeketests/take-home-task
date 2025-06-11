import { Page } from '@playwright/test';

export class ProjectsPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('/projects');
  }

  async createProject(projectName: string) {
    await this.page.getByRole('button', { name: 'Create Project' }).click();
    await this.page.getByRole('textbox', { name: 'Project Name (Ex: Hate Crime' }).click();
    await this.page.getByRole('textbox', { name: 'Project Name (Ex: Hate Crime' }).fill(projectName);
    await this.page.locator('div').filter({ hasText: /^Collaborators$/ }).click();
    await this.page.getByRole('option', { name: 'Test User' }).click();
    await this.page.getByRole('button', { name: 'Submit' }).click();
  }
}