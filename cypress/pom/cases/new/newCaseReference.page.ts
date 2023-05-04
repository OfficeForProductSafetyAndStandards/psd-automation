/// <reference types="cypress"/>

class NewCaseReferencePage {
  assertPageTitle() {
    cy.get(".govuk-fieldset__heading").should("contain", "Do you want to add a reference number?")
  }

  selectNo() {
    cy.get("#investigation_has_complainant_reference_false").check()
  }

  clickContinue() {
    cy.get(".govuk-grid-column-full > form > .govuk-button").contains("Continue").click()
  }
}

export default new NewCaseReferencePage()
