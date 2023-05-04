/// <reference types="cypress"/>

class CasePage {
  goto(prettyId: string) {
    cy.visit(`/cases/${prettyId}`)
  }

  assertPageTitle() {
    cy.get(".govuk-heading-l").should("contain", "Case")
  }

  clickBusinessessTab() {
    cy.get('[data-cy="businesses"]').click()
  }
}

export default new CasePage()
