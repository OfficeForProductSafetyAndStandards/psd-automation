/// <reference types="cypress"/>

class CaseNewBusinessTypePage {
  goto(prettyId: string) {
    cy.visit(`/cases/${prettyId}/businesses/with-type/new`)
  }

  assertPageTitle() {
    cy.get("h1").should("contain", "What is the business type?")
  }

  chooseOnlineMarketplace() {
    cy.get("#business_type_online").check();
  }

  clickContinue() {
    cy.get('[data-cy="continue"]').click();
  }
}

export default new CaseNewBusinessTypePage
