/// <reference types="cypress"/>

class ProductDuplicateCheckPage {
  static assertPageTitle() {
    cy.get("h1").should("contain", "Do you have the product barcode number?")
  }

  static chooseYes() {
    cy.get("[data-cy='barcode-yes']").check()
  }

  static chooseNo() {
    cy.get("[data-cy='barcode-no']").check()
  }

  static clickContinue() {
    cy.get("[data-cy='continue']").click()
  }

  static fillBarcode(barcode: string) {
    cy.get("[data-cy='barcode']").type(barcode)
  }
}

export default ProductDuplicateCheckPage
