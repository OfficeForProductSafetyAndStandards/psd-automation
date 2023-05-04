/// <reference types="cypress"/>

class YourCasesPage {
  goto() {
    cy.visit("/cases/your-cases")
  }

  assertPageTitle() {
    cy.get("h1").should("contain", "Your cases")
  }
}

export default new YourCasesPage()
