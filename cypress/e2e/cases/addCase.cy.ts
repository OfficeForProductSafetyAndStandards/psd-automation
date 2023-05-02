import LoginPage from "../../pom/login.page"
import CasesPage from "../../pom/cases.page";

import ProductPage from "../../pom/product.page";
import ProductFormPage from "../../pom/productForm.page";
import ProductCreatedPage from "../../pom/products/productCreated.page";

import NewCaseWhyPage from "../../pom/cases/new/newCaseWhy.page";
import NewCaseWhyConcernPage from "../../pom/cases/new/newCaseWhyConcern.page";
import NewCaseReferencePage from "../../pom/cases/new/newCaseReference.page";
import NewCaseNamePage from "../../pom/cases/new/newCaseName.page";
import CaseCreatedPage from "../../pom/cases/caseCreated.page";

describe("Create case", () => {
  beforeEach(() => {
    LoginPage.goto()
    LoginPage.loginAsOpss()

    CasesPage.goto()
  })

  context("when trying from the cases page", () => {
    beforeEach(() => {
      CasesPage.goto()
    })

    it("loads the cases page", () => {
      CasesPage.assertPageTitle()
    })

    it("prevents us from creating a case", () => {
      CasesPage.clickNewCase()
      CasesPage.assertStartFromProductsPageText()
    })
  })

  context("when creating a product first", function() {
    beforeEach(() => {
      ProductFormPage.goto()
      ProductFormPage.assertPageTitle()
      cy.fixture('products.json').as('products').then((products) => {
        ProductFormPage.createProductFromFixture(products.iphone)
      })
      ProductCreatedPage.assertPageTitle()
      ProductCreatedPage.clickToProductPage()
      ProductPage.clickCreateNewCase()
    })

    it("can create a case from the product page", () => {
      NewCaseWhyPage.assertPageTitle()
      NewCaseWhyPage.selectProductIsSafe()
      NewCaseWhyPage.clickContinue()
      NewCaseWhyConcernPage.assertPageTitle()
      NewCaseWhyConcernPage.selectProductIsNonCompliant()
      NewCaseWhyConcernPage.fillNonCompliantReason("This is a test reason")
      NewCaseWhyConcernPage.clickContinue()
      NewCaseReferencePage.assertPageTitle()
      NewCaseReferencePage.selectNo()
      NewCaseReferencePage.clickContinue()
      NewCaseNamePage.assertPageTitle()

      let caseName =  `Test case ${Date.now()}`
      NewCaseNamePage.fillName(caseName)
      NewCaseNamePage.clickSave()

      CaseCreatedPage.assertPageTitle()
    })

  })
})
