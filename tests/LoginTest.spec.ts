import { expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import {test} from "./BaseTest";
import { credentials } from "./TestData";
import { url } from "node:inspector";

test('LoginWithRightCredentials', async ({loginPage, page }) => {
    await loginPage.signin(credentials.validUser.validEmail,credentials.validUser.validPassword);
    await loginPage.assertionOfSuccesfulySignIn();
  
});

