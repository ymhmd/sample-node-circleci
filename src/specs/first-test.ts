//Protractor
import {browser, by, element} from 'protractor';

//Utilities
import {CommonUtilities} from "../utilities/CommonUtils";
import Objects from "../resources/Objects.json";
import TestData from "../resources/TestData.json";

//Pages
import {LoginPage} from "../pages/Login";
import {ProtractorUtils} from "../utilities/ProtractorUtils";

import ObjectsIdentifiers from '../resources/Objects.json'

describe('First Test Suite', function () {

    let loginPage =  new LoginPage();

    it('Test Case 1', async function () {
        await loginPage.navigateLoginPage();

        await loginPage.login(TestData.username, TestData.password);
    });

    it('Test Case 2', async function () {
        await loginPage.navigateLoginPage();

        expect(1).toBe(2);
    });

});
