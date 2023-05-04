/// <reference types="cypress"/>

class CasesPage {
  goto() {
    cy.visit("/cases/your-cases")
  }

  assertPageTitle() {
    cy.get("h1").should("contain", "Your cases")
  }

  clickNewCase() {
    cy.get('[data-cy="create-case"]').click()
  }

  assertStartFromProductsPageText() {
    cy.get(".govuk-inset-text").should("contain", "Creating a case starts from a product record page")
  }
}

export default new CasesPage()
