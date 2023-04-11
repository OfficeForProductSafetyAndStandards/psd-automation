import LoginPage from "../pom/login.page"
// import AddCommentPage from '../pom/caseAddCommentPage';
// import CaseActivityPage from '../pom/caseActivityPage';

describe("Login page smoke test", () => {
  beforeEach(() => {
    // Stub necessary API requests here.
    // Visit the required page or set up necessary state.
  })

  afterEach(() => {
    // Clear emails or perform other cleanup tasks.
  })

  it("sees the login page in all its splendor", () => {
    LoginPage.goto()
    LoginPage.assertPageTitle()
  })
})
