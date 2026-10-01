import { test, expect } from '@playwright/test';
const { email,password } = require("../user");

test('should successfully authenticate with valid credentials', async ({ page }) => {
  await page.goto("https://netology.ru");
  await page.getByRole('link', { name: 'Войти' }).click();
  await page.getByText('Другие способы входа').click();
  await page.getByText('Войти по почте').click();
  await page.getByRole('textbox', { name: 'Email' }).fill(email);
  await page.getByRole('textbox', { name: 'Пароль' }).fill(password);
  await page.getByTestId('login-submit-btn').click();
  await page.getByTestId('header-top').visible();
  
});



test('should fail authentication with incorrect password', async ({ page }) => {
  await page.goto("https://netology.ru");
  await page.getByRole('link', { name: 'Войти' }).click();
  await page.getByText('Другие способы входа').click();
  await page.getByText('Войти по почте').click();
  await page.getByRole('textbox', { name: 'Email' }).fill(email);
  await page.getByRole('textbox', { name: 'Пароль' }).fill('Qwerty424');
  await page.getByTestId('login-submit-btn').click();
  await page.getByTestId('login-error-hint').visible();;
  
});