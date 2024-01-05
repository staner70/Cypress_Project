import HomePage from "../Page/HomePage";
import LOCATORS from "../../support/locators";
describe('Brand Page Test', () => {
  const testPage = new HomePage()
  let user;
  before(() => {
    cy.fixture('userDatas/info').then((userInfo) => {
      user = userInfo
    })
  })
  it('should navigate to brand pages and verify product visibility', () => {
    cy.visit('/')
    cy.getBySel(LOCATORS.BRANDS.PRODUCTS_BTN).should("be.visible").click()
    cy.getBySel(LOCATORS.BRANDS.BRANDS_SIDEBAR).should('be.visible');
    cy.getBySel(LOCATORS.BRANDS.BRAND_POLO_LINK).first().click();
    cy.getBySel(LOCATORS.BRANDS.BRAND_POLO_LINK).should('be.visible');
    cy.getBySel(LOCATORS.BRANDS.VERIFY_BRAND_POLO).first().click().wait(2000);
    cy.getBySel(LOCATORS.BRANDS.BRAND_HM_LINK).first().click();
    cy.getBySel(LOCATORS.BRANDS.BRAND_HM_LINK).should('be.visible');
    cy.getBySel(LOCATORS.BRANDS.VERIFY_BRAND_HM).first().click();

  });
});
