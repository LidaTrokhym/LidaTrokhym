import { test, expect } from '@playwright/test';
import { SignUpPage } from '../page-objects/SignUpPage';

test('Sign Up', async ({ page }) => {
    const signUpPage = new SignUpPage(page);

await page.goto('https://gitlab.testautomate.me/users/sign_up');
await signUpPage.signUp('Lida', 'Trokhym', 'lida_test100', 'lidatrokhym4@gmail.com', '11111111Lida!'); 
await expect(page).toHaveURL('https://gitlab.testautomate.me/users');

})