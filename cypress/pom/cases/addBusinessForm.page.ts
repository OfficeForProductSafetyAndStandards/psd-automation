/// <reference types="cypress"/>

import { Business } from "../../support/types"

class AddBusinessDetailsPage {
  fillInDetails(details: Business) {
    cy.get("#legal_name").type(details.legalName)
    cy.get("#company_number").type(details.companyNumber)

    cy.get("#address_line_one").type(details.address.addressLineOne)
    cy.get("#address_line_two").type(details.address.addressLineTwo)
    cy.get("#city").type(details.address.city)
    cy.get("#postcode").type(details.address.postcode)
    cy.get("#country").select(details.address.country)

    cy.get("#contact_name").type(details.contact.name)
    cy.get("#contact_email").type(details.contact.email)
    cy.get("#contact_phone_number").type(details.contact.phoneNumber)
    cy.get("#contact_job_title").type(details.contact.jobTitle)
  }

  saveBusiness() {
    cy.get("button").contains("Save business").click()
  }
}

export default new AddBusinessDetailsPage()
