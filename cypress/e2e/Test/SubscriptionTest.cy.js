import LoginPage from "../Page/LoginPage";
import HomePage from "../Page/HomePage";
import LOCATORS from "../../support/locators";
describe("Should subscribe successfully ", () => {
  const homePage = new HomePage();

  let user;
  before(() => {
    cy.fixture("userDatas/info").then((userInfo) => {
      user = userInfo;
    });
  });
  beforeEach(() => {
    homePage.visitPage();
  });
  it("User should be able to sign up on the cart page", () => {
    cy.title().should("eq", user.home.title);
    cy.getBySel(LOCATORS.CART_PAGE.CART_BTN).click();
    cy.getBySel(LOCATORS.CART_PAGE.SUBSCRIPTION_TEXT).scrollIntoView();
    cy.getBySel(LOCATORS.CART_PAGE.SUBSCRIPTION_TEXT).should("be.visible");
    cy.getBySel(LOCATORS.CART_PAGE.EMAIL_BOX).type(user.userInfo.email);
    cy.getBySel(LOCATORS.CART_PAGE.SUBSCRIPTION_BTN).click();
    cy.getBySel(LOCATORS.CART_PAGE.VERIFY_TEXT).should("be.visible");
  });

  it("User should be able to sign up on the homepage", () => {
    cy.contains(user.home.homePageText).should("be.visible");
    cy.scrollTo("bottom");
    cy.getBySel(LOCATORS.HOME_PAGE.SUBSCRIPTION_TEXT).should("be.visible");
    cy.getBySel(LOCATORS.HOME_PAGE.INPUT_BOX_FOR_EMAIL).type(
      user.home.emailForSubscription
    );
    cy.getBySel(LOCATORS.HOME_PAGE.ARROW_BTN).click();
    cy.getBySel(LOCATORS.HOME_PAGE.SUCCESS_SUBS_MSG_).should("be.visible");
  });
});
