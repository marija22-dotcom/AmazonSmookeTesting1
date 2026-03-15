import { test as base,expect,Page, } from "@playwright/test";
import { BasePage}from "../pages/BasePage";
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";
import { ProductPage } from "../pages/ProductPage";
import { CartPage } from "../pages/CartPage";


const BASE_URL = 'https://www.amazon.com/'


// 1. Definisanje tipova za stranice
type Fixtures = {
  loginPage: LoginPage;
  productPage: ProductPage;
  homePage: HomePage;
  cartPage: CartPage;
  
};

// 2. Prosirivanje testa
export const test = base.extend<Fixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  productPage: async ({ page }, use) => {
    await use(new ProductPage(page));
  },
  cartPage: async ({page},use) =>{
    await use(new CartPage(page))
  }
  
  });
  

  test.beforeEach(async ({ page }) => { 
  // Dodajemo 'networkidle' da sačeka da se učita ceo sajt
  await page.goto(BASE_URL, { waitUntil: 'domcontentloaded' });
  
});
export{expect};

