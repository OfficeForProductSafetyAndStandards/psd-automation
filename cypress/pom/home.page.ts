/// <reference types="cypress"/>

class HomePage {
  goto() {
    cy.visit("/")
  }

  assertPageTitle() {
    cy.get("h1").should("contain", "Home")
  }
}

export default new HomePage()
