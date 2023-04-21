/// <reference types="cypress"/>


class YourCasesPage {
  static goto() {
    cy.visit("/cases/your-cases")
  }

  static assertPageTitle() {
    cy.get("h1").should("contain", "Your cases")
  }
}

export default YourCasesPage
