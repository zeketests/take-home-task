import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProjectsPage } from '../pages/ProjectsPage';
import { StakeholdersPage } from '../pages/StakeholdersPage';

test('User can add a stakeholder to a newly created project', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const projectsPage = new ProjectsPage(page);
  const stakeholdersPage = new StakeholdersPage(page);
  const user = {
    email: 'interview3@fiscalnote.com',
    password: 'Ezequiel3pmFriday!'
  };

  await loginPage.goto();
  await loginPage.login(user.email, user.password);

  await projectsPage.goto();
  const projectName = `AutoTest Project ${Date.now()}`;
  await projectsPage.createProject(projectName);

  await stakeholdersPage.goto();
  const stakeholderName = 'Zeke Dellavechia';
  const actionName = `AutoTest Create Action - ${Date.now()}`
  await stakeholdersPage.searchStakeholder(stakeholderName)
  await stakeholdersPage.addProjectToStakeholder(projectName, stakeholderName, actionName)
});