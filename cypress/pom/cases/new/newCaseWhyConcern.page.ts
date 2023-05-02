/// <reference types="cypress"/>

class NewCaseWhyConcernPage {
  assertPageTitle() {
    cy.get(".govuk-fieldset__heading").should("contain", "Why is the product of concern?")
  }

  selectProductIsNonCompliant() {
    cy.get("#investigation_reported_reason_non_compliant").check()
  }

  fillNonCompliantReason(reason: string) {
    cy.get("#non_compliant_reason").type(reason)
  }

  clickContinue() {
    cy.get("#main-content > form > .govuk-button").contains("Continue").click()
  }
}

export default new NewCaseWhyConcernPage()
