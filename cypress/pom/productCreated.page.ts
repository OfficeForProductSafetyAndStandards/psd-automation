/// <reference types="cypress"/>

class ProductCreatedPage {
  assertPageTitle() {
    cy.get("h1").should("contain", "Product record created")
  }
}

export default new ProductCreatedPage
