/// <reference types="cypress"/>

import UserDeclarationPage from "./userDeclaration.page"

class LoginPage {
  goto() {
    cy.visit("/sign-in")
  }

  assertPageTitle() {
    cy.get("h1").should("contain", "Sign in")
  }

  loginAsOpss() {
    cy.fixture('users.json').as('users').then((users) => {
      LoginPage.fillEmail(users.opss.email)
      LoginPage.fillPassword(users.opss.password)
    })

    LoginPage.submit()
    // UserDeclarationPage.confirmDeclaration()
  }

  fillEmail(email: string) {
    cy.get("#email").type(email)
  }

  fillPassword(password: string) {
    cy.get("#password").type(password)
  }

  submit() {
    cy.get("#new_user > .govuk-button").click()
  }


}

export default new LoginPage
