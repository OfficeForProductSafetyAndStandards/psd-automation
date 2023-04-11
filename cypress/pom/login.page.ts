/// <reference types="cypress"/>

class LoginPage {
  static goto() {
    cy.visit("/sign-in")
  }

  static assertPageTitle() {
    cy.get("h1").should("contain", "Sign in")
  }
}

export default LoginPage
