/// <reference types="cypress"/>

class CaseBusinessesPage {
  goto(prettyId: string) {
    cy.visit(`/cases/${prettyId}/businesses`)
  }

  assertPageTitle() {
    cy.get("h1").should("contain", "Businesses")
  }

  assertBusinessCreated() {
    cy.get('.govuk-notification-banner').should("contain", "The business was created")
  }

  clickAddBusiness() {
    cy.get("[data-cy='add-a-business']").click()
  }
}

export default new CaseBusinessesPage