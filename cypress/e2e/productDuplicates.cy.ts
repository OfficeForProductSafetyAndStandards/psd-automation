import LoginPage from "../pom/login.page"
import ProductsPage from "../pom/products.page"
import ProductDuplicateCheckPage from "../pom/productDuplicateCheck.page"
import ProductDuplicateConfirmPage from "../pom/productDuplicateConfirm.page"
import ProductCreatedPage from "../pom/productCreated.page"
import ProductFormPage from "../pom/productForm.page"
import ProductPage from "../pom/product.page"

describe("Creating a product & ensuring no duplicates", () => {
  beforeEach(() => {
    LoginPage.goto()
    LoginPage.loginAsOpss()

    ProductsPage.goto()
  })

  it("loads the products page", () => {
    ProductsPage.assertPageTitle()
  })

  context("when creating a new product", () => {
    beforeEach(() => {
      ProductsPage.goto()
      ProductsPage.clickNew()
    })

    it("can create a product with no barcode", () => {
      ProductDuplicateCheckPage.assertPageTitle()
      ProductDuplicateCheckPage.chooseNo()
      ProductDuplicateCheckPage.clickContinue()

      ProductFormPage.assertPageTitle()
    })

    // context("when a product with the same barcode does not exist", () => {
    //   it("can create a new product with a barcode", () => {
    //     ProductDuplicateCheckPage.assertPageTitle()
    //     ProductDuplicateCheckPage.chooseYes()
    //     ProductDuplicateCheckPage.fillBarcode("1234567890123")
    //     ProductDuplicateCheckPage.clickContinue()

    //     ProductFormPage.assertPageTitle()
    //     ProductFormPage.assertBarcode("1234567890123")
    //   })
    // })

    context("when a product with the same barcode already exists", () => {
      it("presents the product that has the same barcode", () => {
        ProductDuplicateCheckPage.assertPageTitle()
        ProductDuplicateCheckPage.chooseNo()
        ProductDuplicateCheckPage.clickContinue()

        ProductFormPage.assertPageTitle()

        cy.fixture("products.json")
          .as("products")
          .then((products) => {
            ProductFormPage.createProductFromFixture(products.iphone)
            ProductCreatedPage.assertPageTitle()
          })

        // Now try to create a new product with the same barcode
        ProductsPage.goto()
        ProductsPage.clickNew()
        ProductDuplicateCheckPage.assertPageTitle()
        ProductDuplicateCheckPage.chooseYes()
        cy.fixture("products.json")
          .as("products")
          .then((products) => {
            ProductDuplicateCheckPage.fillBarcode(products.iphone.barcode)
          })
        ProductDuplicateCheckPage.clickContinue()

        ProductDuplicateConfirmPage.assertPageTitle()
        ProductDuplicateConfirmPage.chooseYes()
        ProductDuplicateConfirmPage.clickContinue()

        cy.fixture("products.json")
          .as("products")
          .then((products) => {
            ProductPage.assertName(products.iphone.name)
          })
      })
    })
  })
})
