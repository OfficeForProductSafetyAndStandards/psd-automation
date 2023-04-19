/// <reference types="cypress"/>

class ProductPage {
  static assertName(name: string) {
    cy.get("[data-cy='product-name']").should("contain", name)
  }
}

export default ProductPage
