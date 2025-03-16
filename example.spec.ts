import { test, expect } from '@playwright/test';
test('Login test', async ({ page }) => {
  await page.goto('https://gitlab.testautomate.me/users/sign_in')
  await page.fill('#user_login','lida_test10')
  await page.fill('#user_password', '11111111Lida!')
  await page.click('text=Sign in')
  await expect(page).toHaveURL('https://gitlab.testautomate.me')
})



