
import {test,expect} from './BaseTest'

test('Buy flow test', async ({cartPage,productPage,homePage, page }) => {
  
  await (homePage.asertionOfBeeingOnHomePage());
  await  (cartPage.assertionCountCart("0")) 
  await homePage.SearchingMethod("Waiting for the Barbarians: A Novel");
  await productPage.chooseSpecificBook("Waiting for the Barbarians: A Novel");
  await productPage.addToCart.click({force:true});
  await  (cartPage.assertionCountCart("1"))

});




