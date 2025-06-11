import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProjectsPage } from '../pages/ProjectsPage';

test('User can create a new project successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const projectsPage = new ProjectsPage(page);
  const user = {
    email: 'interview3@fiscalnote.com',
    password: 'Ezequiel3pmFriday!'
  };

  await loginPage.goto();
  await loginPage.login(user.email, user.password);

  await projectsPage.goto();
  const projectName = `AutoTest Create Project - ${Date.now()}`;
  await projectsPage.createProject(projectName);
  await expect(page.getByText(projectName, { exact: true })).toBeVisible();
});