import Page from "./Page";

export class ProductsPage extends Page {


   



    public constructor() {
        super();
    }

    private products() { return $$(".inventory_item button[id^=add-to-cart]"); }
    private shopping_cart_badge() { return $("//a[contains(@class,'cart')]"); }

    public inventoryPageLogoLabel() { return $(".app_logo"); }
    public productsLabel() { return $(".header_secondary_container > .title"); }

    public logoLabel() { return $(".app_logo"); }
    public cartNumberLabel() { return $(".//*[contains(@class, 'shopping_cart_badge')]"); }

    public addToCartAllProducts() {
        this.products().forEach( element => {
            element.click();
        });
        return this;
    }

    public async addToCartRendomProducts() {
        const elements = await this.products();
        console.log("------------------");
        const rand = Math.floor(Math.random() * elements.length);
        console.log(rand);
        await elements[rand].scrollIntoView();
        await elements[rand].click();
        return this;
    }
    public async navigateToShoppingCart() {
        await this.shopping_cart_badge().scrollIntoView();
        await this.shopping_cart_badge().click();
    }

}

export default new ProductsPage();
