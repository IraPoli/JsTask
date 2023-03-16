import { ChainablePromiseElement } from 'webdriverio';
import url from "../data/urls";

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
export class LoginPage extends Page {

    private usernameInput() { return $("#user-name"); }
    private passwordInput() { return $("#password"); }
    private loginButton() { return $("#login-button"); }
    

    async waitForPageToBeLoaded() {
        await this.usernameInput().waitForDisplayed({ timeout: 3000, reverse: false });

        return this;
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async login (user) {
        await this.usernameInput().scrollIntoView();
        await this.usernameInput().setValue(user.username);
        await this.passwordInput().setValue(user.password);
        await this.loginButton().click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public async open () {
        return super.open(url.baseUrl);
    }
}

export default new LoginPage();
