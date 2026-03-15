import { Page,Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class ProductPage extends BasePage {

readonly addToCart: Locator ;
  
  constructor(page: Page) {
    super(page);

    this.addToCart = page.getByRole('button',{name:'Add to cart'});
  }

    // 1. Define method that acceot book title as a parameter
async chooseSpecificBook(bookTitle: string) {
    
    // 2. Created locator that will find any book we call by its title
    const choosenBookTitle = this.page.getByLabel(bookTitle);

    // 3. Weit for tje book to be visible
    await choosenBookTitle.waitFor({ state: 'visible' });

    // 4. click on the book
    await choosenBookTitle.click();
}
}
