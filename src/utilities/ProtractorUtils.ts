export class ProtractorUtils {

    static async validateElementIsNotDisplayed (element) {
        await expect(element.isPresent()).toBeFalsy();
    }

    static async validateElementIsDisplayed (element) {
        await expect(element.isPresent()).toBeTruthy();
    }

    static async validateElementDisplayedText (element, expectedText) {
        await expect(element.getText()).toEqual(expectedText);
    }

}
