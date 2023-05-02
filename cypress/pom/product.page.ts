/// <reference types="cypress"/>

class ProductPage {
  assertName(name: string) {
    cy.get("[data-cy='product-name']").should("contain", name)
  }
}

export default new ProductPage
