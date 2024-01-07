import LOCATORS from "../../support/locators"

class CategoryPage {

    verifyProductsCategory() {
        return cy.getBySel(LOCATORS.CATEGORY_PAGE.PRODUCTS)
    }

    clickJeans() {
        cy.getBySel(LOCATORS.CATEGORY_PAGE.JEANS).click({ force: true })
    }
}
export default CategoryPage