/// <reference types="cypress"/>

class UserDeclarationPage {
  assertPageTitle() {
    cy.get("h1").should("contain", "User declaration")
  }

  confirmDeclaration() {
    cy.get("#agree").check()
    cy.get("#main-content > .govuk-button").click()
  }
}

export default new UserDeclarationPage()
