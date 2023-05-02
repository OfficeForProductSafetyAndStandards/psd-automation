/// <reference types="cypress"/>

import { Business } from "../../../../support/types"

class CaseNewBusinessForm {
  fillForm(business: Business) {
    cy.get("#trading_name").type(business.tradingName)
    cy.get("#company_number").type(business.companyNumber)
  }

  clickSave() {
    cy.get('[data-cy="save"]').contains("Save business").click()
  }
}

export default new CaseNewBusinessForm()
