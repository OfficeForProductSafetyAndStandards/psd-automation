import LoginPage from "../../pom/login.page"
import CasesPage from "../../pom/cases.page"

import ProductPage from "../../pom/product.page"
import ProductFormPage from "../../pom/productForm.page"
import ProductCreatedPage from "../../pom/products/productCreated.page"

import NewCaseWhyPage from "../../pom/cases/new/newCaseWhy.page"
import NewCaseWhyConcernPage from "../../pom/cases/new/newCaseWhyConcern.page"
import NewCaseReferencePage from "../../pom/cases/new/newCaseReference.page"
import NewCaseNamePage from "../../pom/cases/new/newCaseName.page"
import CaseCreatedPage from "../../pom/cases/caseCreated.page"

import CasePage from "../../pom/cases/case.page"
import CaseBusinessesPage from "../../pom/cases/show/casesBusinesses.page"
import CaseNewBusinessTypePage from "../../pom/cases/new/business/caseNewBusinessType.page"
import CaseNewBusinessFormPage from "../../pom/cases/new/business/caseNewBusinessForm.page"

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

  context("when creating a product first", function () {
    beforeEach(() => {
      ProductFormPage.goto()
      ProductFormPage.assertPageTitle()
      cy.fixture("products.json")
        .as("products")
        .then((products) => {
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

      let caseName = `Test case ${Date.now()}`
      NewCaseNamePage.fillName(caseName)
      NewCaseNamePage.clickSave()

      CaseCreatedPage.assertPageTitle()
    })

    context("with a case already created", () => {
      beforeEach(() => {
        ProductFormPage.goto()
        ProductFormPage.assertPageTitle()
        cy.fixture("products.json")
          .as("products")
          .then((products) => {
            ProductFormPage.createProductFromFixture(products.iphone)
          })
        ProductCreatedPage.assertPageTitle()
        ProductCreatedPage.clickToProductPage()
        ProductPage.clickCreateNewCase()

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

        let caseName = `Test case ${Date.now()}`
        NewCaseNamePage.fillName(caseName)
        NewCaseNamePage.clickSave()

        CaseCreatedPage.assertPageTitle()
        CaseCreatedPage.clickToCasePage()
      })

      it("a customer can add a business", () => {
        CasePage.assertPageTitle()
        CasePage.clickBusinessessTab()
        CaseBusinessesPage.assertPageTitle()
        CaseBusinessesPage.clickAddBusiness()
        CaseNewBusinessTypePage.assertPageTitle()
        CaseNewBusinessTypePage.chooseOnlineMarketplace()
        CaseNewBusinessTypePage.clickContinue()

        cy.fixture("businesses.json")
          .as("businesses")
          .then((businesses) => {
            CaseNewBusinessFormPage.fillForm(businesses.ebay)
          })

        CaseNewBusinessFormPage.clickSave()
        CaseBusinessesPage.assertBusinessCreated()
      })
    })
  })
})
