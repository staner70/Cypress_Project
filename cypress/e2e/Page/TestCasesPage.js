import LOCATORS from "../../support/locators"
class TestCases {

    clickTestCases() {
        cy.getBySel(LOCATORS.HOME_PAGE.TEST_CASES_BTN).click()

    }

    getTextTitle() {
        return cy.getBySel(LOCATORS.TEST_CASES_PAGE.TEXT_TITLE)
    }
}
export default TestCases

