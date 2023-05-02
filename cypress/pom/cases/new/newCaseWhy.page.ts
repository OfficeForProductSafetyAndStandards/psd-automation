/// <reference types="cypress"/>

class NewCaseWhyPage {
  assertPageTitle() {
    cy.get(".govuk-fieldset__heading").should("contain", "Why are you creating a case?")
  }

  selectProductIsSafe() {
    cy.get("#case_is_safe").check()
  }

  clickContinue() {
    cy.get(".govuk-button-group > .govuk-button").contains("Continue").click()
  }
}

export default new NewCaseWhyPage()
