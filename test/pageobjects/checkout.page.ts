import Page from "./Page";

export class Checkout extends Page {

    public constructor() {
        super();
    }

    public async clickFinish() { $("#finish").click();}

}

export default new Checkout();
