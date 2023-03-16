/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
  
    protected async  open (path: string) {

      await browser.maximizeWindow();
      await browser.url(path)
    }

    async waitForPageToBeLoaded(){
        return this;
    }

    async waitForSeconds(value: number) {
        await browser.pause(value * 1000);
    }
}
