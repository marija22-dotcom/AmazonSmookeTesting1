import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
    readonly helloSignInLink: Locator;
    readonly emailInputField: Locator;
    readonly continueBtn: Locator;
    readonly passwordInputField: Locator;
    readonly signInBtn2: Locator;
    readonly ordersLink: Locator;

    constructor(page: Page) {
        super(page);

        // Locators
        this.helloSignInLink = page.getByRole('link', { name: 'Hello, sign in Account & Lists' });
        this.emailInputField = page.getByRole('textbox', { name: 'Enter mobile number or email' });
        this.continueBtn = page.getByRole('button', { name: 'Continue' });
        this.passwordInputField = page.getByRole('textbox', { name: 'password' });
        this.signInBtn2 = page.getByRole('button', { name: 'Sign in' });
        this.ordersLink = page.getByRole('link', { name: '& Orders' });
    }

    // Method for signing in
    async signin(email: string, password: string) {
        await this.helloSignInLink.click();
        await this.emailInputField.fill(email);
        await this.continueBtn.click();
        await this.passwordInputField.fill(password);
        await this.signInBtn2.click();
    }

    // Method for verifying successful login
    async assertionOfSuccesfulySignIn() {
        
        await expect(this.ordersLink).toBeVisible({ timeout: 10000 });
    }
}