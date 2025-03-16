import { Page, Locator } from '@playwright/test';

export class LoginPage {
    readonly userName: Locator;
    readonly userPassword: Locator;
    readonly signInButton: Locator;

    constructor(page: Page) {
        // Directly reference locators in the constructor
        this.userName = page.locator('#user_login');
        this.userPassword = page.locator('#user_password');
        this.signInButton = page.locator("button[name='button']");
    }

    // A simple signIn method that combines filling fields and clicking the sign-in button
    async signIn(username: string, password: string) {
        await this.userName.fill(username);  // Fill the username field
        await this.userPassword.fill(password);  // Fill the password field
        await this.signInButton.click();  // Click the sign-in button
    }
}