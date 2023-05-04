/// <reference types="cypress"/>

class AddBusinessTypePage {
  selectBusinessType(type: string) {
    cy.get(`input[value="${type}"]`).check()
  }

  continue() {
    cy.get("button").contains("Continue").click()
  }
}

export default new AddBusinessTypePage()
