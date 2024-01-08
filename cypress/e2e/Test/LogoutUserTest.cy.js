import HomePage from "../Page/HomePage";
import LoginPage from "../Page/LoginPage";
import LOCATORS from "../../support/locators";
describe("Logout User", () => {
  const homPage = new HomePage();
  const loginPage = new LoginPage();
  let user;
  before(() => {
    cy.fixture("userDatas/info").then((userInfo) => {
      user = userInfo;
    });
  });
  it("The user should be able to return to the login page when they unregister from the site", () => {
    homPage.visitPage();
    cy.getBySel(LOCATORS.HOME_PAGE.HEADER).should("be.visible");
    cy.getBySel(LOCATORS.HOME_PAGE.LOGIN_BTN).click();
    cy.getBySel(LOCATORS.LOGIN_PAGE.LOGIN_ACCOUNT_TEXT).should("be.visible");
    loginPage.userLogin(user);
    cy.getBySel(LOCATORS.LOGIN_PAGE.LOGGED_AS_TEXT).should("be.visible");
    cy.getBySel(LOCATORS.HOME_PAGE.LOGOUT_BTN).click();
    cy.getBySel(LOCATORS.LOGIN_PAGE.LOGIN_ACCOUNT_TEXT).should("be.visible");
  });
});
