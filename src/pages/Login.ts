import {browser, element, by} from 'protractor';

import ObjectsIdentifiers from '../resources/Objects.json'
import TestData from '../resources/TestData.json'

export class LoginPage  {

    emailFieldElement = element(by.xpath(ObjectsIdentifiers.Login.emailFieldXpath));
    passwordFieldElement = element(by.xpath(ObjectsIdentifiers.Login.passwordFieldXpath));
    loginButtonElement = element(by.xpath(ObjectsIdentifiers.Login.loginButtonXpath));

    loginPageUrl = TestData.appUrl;

    async login (email, password) {
        await this.emailFieldElement.sendKeys(email);
        await this.passwordFieldElement.sendKeys(password);

        await this.loginButtonElement.click();
    }

    async navigateLoginPage () {
        await browser.get(this.loginPageUrl);
    }
}
