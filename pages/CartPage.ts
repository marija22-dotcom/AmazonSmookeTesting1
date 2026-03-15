import {test,expect,Locator,Page} from '@playwright/test';
import { BasePage } from './BasePage';

export class CartPage extends BasePage{
    readonly proceedToChackout:Locator;
    readonly countItemInCart:Locator;


 constructor(page:Page) {
    super(page);
    this.proceedToChackout= page.getByLabel('Primary').getByRole('link', { name: 'Go to Cart' });
    this.countItemInCart = page.locator('#nav-cart-count');
 }

 // Dodajemo parametar 'expectedCount' da metoda bude univerzalna
async assertionCountCart(expectedCount: string) {
    await expect(this.countItemInCart).toHaveText(expectedCount);
}

 

 

}