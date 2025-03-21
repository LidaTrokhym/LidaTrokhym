import { test, expect } from '@playwright/test';
import { SignUpPage } from '../page-objects/SignUpPage';
import { HomePage } from '../page-objects/HomePage';
import { User } from '../helpers/UserModel';

test.describe('SignUpPage Flow', () => {
  let signUpPage: SignUpPage;
  let homePage: HomePage;
  
  test.beforeEach(async ({ page }) => {
    signUpPage = new SignUpPage(page); 
    homePage = new HomePage(page); 
    await signUpPage.goto();
  });

  test('Sign Up', async ({ page }) => {
    const user = User.createUser();  
    await signUpPage.signUp(user.firstname, user.lastname, user.username, user.useremail, user.userpassword);
    await signUpPage.selectRoleAndReason(user.user_role, user.usage_reason); 
    await homePage.checkHomeURL()
  });
});