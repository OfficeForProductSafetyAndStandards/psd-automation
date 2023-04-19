/// <reference types="cypress"/>

class ProductDuplicateConfirmPage {
  static assertPageTitle() {
    cy.get("h1").should("contain", "Is this the same product?")
  }

  static chooseYes() {
    cy.get("[data-cy='confirm-yes']").check()
  }

  static chooseNo() {
    cy.get("[data-cy='confirm-no']").check()
  }

  static clickContinue() {
    cy.get("[data-cy='continue']").click()
  }
}

export default ProductDuplicateConfirmPage
