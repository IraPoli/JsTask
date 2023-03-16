import Page from "./Page";

export class CheckoutCompletePage extends Page {

    public constructor() {
        super();
    }

    public async getCheckoutCompleteHeader() { (await $("//h2[@class='complete-header']")).getText;}

}

export default new CheckoutCompletePage();
