/// <reference types="cypress"/>

class ProductCreatedPage {
  static assertPageTitle() {
    cy.get("h1").should("contain", "Product record created")
  }
}

export default ProductCreatedPage
