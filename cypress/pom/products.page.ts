/// <reference types="cypress"/>

class ProductsPage {
  static goto() {
    cy.visit("/products/all-products")
  }

  static assertPageTitle() {
    cy.get("h1").should("contain", "All products")
  }

  static clickNew() {
    cy.get("[data-cy='new-product']").click()
  }
}

export default ProductsPage
