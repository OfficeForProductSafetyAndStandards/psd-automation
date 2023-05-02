/// <reference types="cypress"/>

class ProductsPage {
  goto() {
    cy.visit("/products/all-products")
  }

  assertPageTitle() {
    cy.get("h1").should("contain", "All products")
  }

  clickNew() {
    cy.get("[data-cy='new-product']").click()
  }
}

export default new ProductsPage
