import {LoginPage} from "../pageobjects/login.page";
import {ProductsPage} from "../pageobjects/products.page";
import {CartPage} from "../pageobjects/cart.page";
import {CheckoutInformationPage} from "../pageobjects/checkoutYourInformation.page";
import {Checkout} from "../pageobjects/checkout.page";
import {CheckoutCompletePage} from "../pageobjects/checkoutComplete.page";



import personalInformation from "../data/personalInformation";
import users from "../data/users";

describe('My buy product', () => {
    const loginPage = new LoginPage();

    beforeEach(async () => {
        await loginPage.open();
        await loginPage.waitForPageToBeLoaded();
        await loginPage.waitForSeconds(3);
    });

    it('should buy product', async () => {

        await loginPage.login(users.standardUser)
        await loginPage.waitForSeconds(3);

        const productsPage = await new ProductsPage();

        await productsPage.addToCartRendomProducts();
        await productsPage.addToCartRendomProducts();
        await productsPage.navigateToShoppingCart();
        await loginPage.waitForSeconds(3);

        const cartPage = await new CartPage();
        cartPage.cartItemCount().then(countNumber=>{
            cartPage.cartItemGetListLength().then(itemLength=>{
                expect(countNumber).toEqual(itemLength);
            })
        })
        await cartPage.clickCheckout();
        await cartPage.waitForSeconds(3);

        const checkoutInformationPage = await new CheckoutInformationPage();
        await checkoutInformationPage.waitForPageToBeLoaded();
        await checkoutInformationPage.fillUpPresonalInformation(personalInformation.standardUserPersonalInformation);
        await checkoutInformationPage.waitForSeconds(3);
    

        const checkout = await new Checkout();
        await checkout.clickFinish();
        await checkoutInformationPage.waitForSeconds(3);

       
        const checkoutCompletePage = await new CheckoutCompletePage();
        checkoutCompletePage.getCheckoutCompleteHeader().then(header=>{
            expect(header).toEqual("Thank you for your order!");
        });
        await checkoutInformationPage.waitForSeconds(5);

    })
})


