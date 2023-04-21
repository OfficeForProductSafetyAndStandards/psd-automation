/// <reference types="cypress"/>


class UserDeclarationPage {
  static assertPageTitle() {
    cy.get("h1").should("contain", "User declaration")
  }

  static confirmDeclaration() {
    cy.get("#agree").check()
    cy.get("#main-content > .govuk-button").click()
  }
}

export default UserDeclarationPage