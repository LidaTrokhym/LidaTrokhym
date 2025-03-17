import { Page, Locator } from '@playwright/test';

export class SignUpPage {
    readonly page: Page;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly userName: Locator;
    readonly userEmail: Locator;
    readonly userPassword: Locator;
    readonly confirmPassword: Locator;
    readonly registerButton: Locator;
    readonly roleDropdown: Locator;
    readonly objectiveDropdown: Locator;
    readonly startButton: Locator;

    constructor(page: Page) {

        this.page = page;
        this.firstName = page.locator('#new_user_first_name');
        this.lastName = page.locator('#new_user_last_name');
        this.userName = page.locator('#new_user_username');
        this.userEmail = page.locator('#new_user_email');
        this.userPassword = page.locator('#new_user_password');
        this.registerButton = page.locator("[data-qa-selector='new_user_register_button']");
        this.roleDropdown = page.locator('#user_role');
        this.objectiveDropdown = page.locator('#user_registration_objective');
        this.startButton = page.locator("button[name='button']");
    }

    async signUp(firstname: string, lastname: string, username: string, useremail:string, userpassword: string) {
        await this.firstName.fill(firstname);
        await this.lastName.fill(lastname);
        await this.userName.fill(username);
        await this.userEmail.fill(useremail);
        await this.userPassword.fill(userpassword);
        await this.registerButton.click();
    }

    async goto () {
        await this.page.goto ('https://gitlab.testautomate.users');
    }

    async selectRoleandObjectiveandButton(role, object, button) {
        await this.roleDropdown.selectOption({ value: role });
        await this.objectiveDropdown.selectOption({ value: object });
        await this.startButton.click(button);
    }
    
}