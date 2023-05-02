/// <reference types="cypress"/>

class ProductDuplicateConfirmPage {
  assertPageTitle() {
    cy.get("h1").should("contain", "Is this the same product?")
  }

  chooseYes() {
    cy.get("[data-cy='confirm-yes']").check()
  }

  chooseNo() {
    cy.get("[data-cy='confirm-no']").check()
  }

  clickContinue() {
    cy.get("[data-cy='continue']").click()
  }
}

export default new ProductDuplicateConfirmPage
