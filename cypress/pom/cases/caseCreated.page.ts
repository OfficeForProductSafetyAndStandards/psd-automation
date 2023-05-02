/// <reference types="cypress"/>

class CaseCreatedPage {
  assertPageTitle() {
    cy.get(".govuk-panel__title").should("contain", "Case created")
  }

  clickToCasePage() {
    cy.get(".govuk-body-l > .govuk-link").click()
  }
}

export default new CaseCreatedPage()
