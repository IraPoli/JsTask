import Page from "./Page";

export class CartPage extends Page {

    public constructor() {
        super();
    }

    private cart_items() { return $$("//div[contains(@class,'cart_item_label')]"); }
    private shopping_cart() { return $("//a[contains(@class,'cart')]//span"); }
  


    public cartItemCount() { return this.shopping_cart().getText();}

    public cartItemGetListLength() { return this.cart_items().length;}

    public async clickCheckout() { $("#checkout").click();}

}

export default new CartPage();
