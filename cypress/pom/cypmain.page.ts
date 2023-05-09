class CypMainPage {
  goto() {
    cy.visit("/guides/overview/why-cypress")
  }

  assertPageTitle() {
    cy.get("h2").should("contain", "In a nutshell")
  }
}

export default new CypMainPage()