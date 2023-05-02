/// <reference types="cypress"/>

class ProductCreatedPage {
  assertPageTitle() {
    cy.get('.govuk-panel__title').should("contain", "Product record created")
  }

  clickToProductPage() {
    cy.get('.govuk-body-l > .govuk-link').click()
  }
}

export default new ProductCreatedPage
