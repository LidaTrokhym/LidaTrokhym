import { test, expect } from '@playwright/test';
import { SignUpPage } from '../page-objects/SignUpPage';

const generateUniqueData = () => {
    const timestamp = new Date().getTime();
    const randomSuffix = Math.floor(Math.random() * 1000);
    const firstName = `${timestamp}`;
    const lastName = `${timestamp}`;
    const username = `${timestamp}`;
    const email = `${timestamp}@gmail.com`;
    const password = `11111111Lida!`;

  return { firstName, lastName, username, email, password };
};

test('Sign Up', async ({ page }) => {
    const signUpPage = new SignUpPage(page);
    const { firstName, lastName, username, email, password } = generateUniqueData();

await page.goto('https://gitlab.testautomate.me/users/sign_up');
await signUpPage.signUp(firstName, lastName, username, email, password);
await signUpPage.selectRoleandObjectiveandButton('other', 'basics', 'Get started!');
await expect(page).toHaveURL('https://gitlab.testautomate.me/dashboard/projects');
}

)