/// <reference types="cypress"/>

import UserDeclarationPage from "./userDeclaration.page"

class LoginPage {
  static goto() {
    cy.visit("/sign-in")
  }

  static assertPageTitle() {
    cy.get("h1").should("contain", "Sign in")
  }

  static loginAsOpss() {
    cy.fixture('users.json').as('users').then((users) => {
      LoginPage.fillEmail(users.opss.email)
      LoginPage.fillPassword(users.opss.password)
    })

    LoginPage.submit()
    // UserDeclarationPage.confirmDeclaration()
  }

  static fillEmail(email: string) {
    cy.get("#email").type(email)
  }

  static fillPassword(password: string) {
    cy.get("#password").type(password)
  }

  static submit() {
    cy.get("#new_user > .govuk-button").click()
  }
}

export default LoginPage
