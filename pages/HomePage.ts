import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class HomePage extends BasePage {
    readonly searchField :Locator;
    readonly cartBtn:Locator;
    readonly giftCardField:Locator;


   constructor(page: Page) {
    super(page);

    this.searchField = page.getByRole('searchbox', { name: "Search Amazon" });
    this.cartBtn = page.locator('.nav-cart-icon nav-sprite');
    this.giftCardField = page.getByRole('link', { name: 'Gift Cards' })
  
  }

//Searching method
async SearchingMethod(desireProduct: string) {
  await this.searchField.fill(desireProduct);
  await this.searchField.press('Enter')
}

 //Assertion that we are on home page 
 async asertionOfBeeingOnHomePage (){
    await expect (this.giftCardField).toBeVisible();
 }
 
}