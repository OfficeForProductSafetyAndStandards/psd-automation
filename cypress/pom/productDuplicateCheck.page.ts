/// <reference types="cypress"/>

class ProductDuplicateCheckPage {
  assertPageTitle() {
    cy.get("h1").should("contain", "Do you have the product barcode number?")
  }

  chooseYes() {
    cy.get("[data-cy='barcode-yes']").check()
  }

  chooseNo() {
    cy.get("[data-cy='barcode-no']").check()
  }

  clickContinue() {
    cy.get("[data-cy='continue']").click()
  }

  fillBarcode(barcode: string) {
    cy.get("[data-cy='barcode']").type(barcode)
  }
}

export default new ProductDuplicateCheckPage()
