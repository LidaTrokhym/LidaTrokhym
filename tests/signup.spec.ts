import { test, expect } from '@playwright/test';
import { SignUpPage } from '../page-objects/SignUpPage';

test('Sign Up', async ({ page }) => {
    const signUpPage = new SignUpPage(page);

await page.goto('https://gitlab.testautomate.me/users/sign_up');
await signUpPage.signUp('Lid7', 'Tro7', 'lida_test7', 'lidatrokhym7@gmail.com', '11111111Lida!');
await signUpPage.selectRoleandObjectiveandButton('other', 'basics', 'Get started!');
await expect(page).toHaveURL('https://gitlab.testautomate.me/dashboard/projects');
}

)