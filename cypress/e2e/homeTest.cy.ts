import CypMainPage from "../pom/cypmain.page"

describe("Cypress main page smoke test", () => {

  it("sees the main page in all its splendor", () => {
    CypMainPage.goto()
    CypMainPage.assertPageTitle()
  })

})