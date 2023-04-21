import LoginPage from "../pom/login.page"
import YourCasesPage from "../pom/yourCases.page"

describe("Login page smoke test", () => {
  beforeEach(() => {
    // cy.clearCookie('_psd_session')
  })

  it("sees the login page in all its splendor", () => {
    LoginPage.goto()
    LoginPage.assertPageTitle()
  })

  it("can log in as OPSS user", () => {
    LoginPage.goto()
    LoginPage.loginAsOpss()

    YourCasesPage.assertPageTitle()
  })
})
