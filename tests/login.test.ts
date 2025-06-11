import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('User can log in successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const user = { email: 'interview3@fiscalnote.com', password: 'Ezequiel3pmFriday!' };

  await loginPage.goto();
  await loginPage.login(user.email, user.password);
  await expect(page.getByText("Test's Dashboard")).toBeVisible(); 
});