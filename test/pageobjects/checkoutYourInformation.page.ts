import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
export class CheckoutInformationPage extends Page {

    private firstName() { return $("#first-name"); }
    private lastName() { return $("#last-name"); }
    private postalCode() { return $("#postal-code"); }
    private continue() { return $("#continue"); }
    

    async waitForPageToBeLoaded() {
        await this.postalCode().waitForDisplayed({ timeout: 3000, reverse: false });

        return this;
    }


    public async fillUpPresonalInformation (information) {
        await this.firstName().scrollIntoView();
        await this.firstName().setValue(information.firstName);
        await this.lastName().setValue(information.lastName);
        await this.postalCode().setValue(information.postalCode);
        await this.continue().click();
    }

}

export default new CheckoutInformationPage();
