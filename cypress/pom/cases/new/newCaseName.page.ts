class NewCaseNamePage {
  assertPageTitle() {
    cy.get('.govuk-label').should("contain", "What is the case name?")
  }

  fillName(name: string) {
    cy.get('#user_title').type(name);
  }

  clickSave() {
    cy.get('.govuk-button-group > .govuk-button').contains("Save").click();
  }
}

export default new NewCaseNamePage()
