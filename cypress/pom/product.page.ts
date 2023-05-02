/// <reference types="cypress"/>

class ProductPage {
  assertName(name: string) {
    cy.get("[data-cy='product-name']").should("contain", name)
  }

  clickCreateNewCase() {
    cy.get("[data-cy='create-new-case']").click()
  }
}

export default new ProductPage
