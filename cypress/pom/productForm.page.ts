/// <reference types="cypress"/>
import { Product } from '../support/types';

class ProductFormPage {
  goto() {
    cy.visit("/products/new")
  }

  assertPageTitle() {
    cy.get("h1").should("contain", "Create a product record")
  }

  assertBarcode(barcode: string) {
    cy.get("#barcode").should("have.value", barcode)
  }

  createProductFromFixture(product: Product) {
    cy.get("#name").type(product.name)
    cy.get("#category").select(product.category)
    cy.get("#subcategory").type(product.subcategory)
    cy.get("#authenticity").click()
    cy.get("#has_markings").click()
    cy.get("#markings").click()
    cy.get("#product_brand").type(product.description)
    cy.get("#when_placed_on_market").click()
    cy.get("#product_webpage").type(product.webpage)
    cy.get("#product_country_of_origin").select(product.country_of_origin)
    cy.get("#product_description").type(product.description)

    cy.get("[data-cy='save']").click()
  }

}

export default new ProductFormPage
