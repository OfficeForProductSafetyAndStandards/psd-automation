import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../../pom/login.page"
import HomePage from "../../../pom/home.page"

Given("I am on the login page for PSD", () => {
  LoginPage.goto()
});

When("I enter a valid OPSS email", () => {
  cy.fixture("users.json")
    .as("users")
    .then((users) => {
      LoginPage.fillEmail(users.opss.email)
    })
})
When("I enter a valid OPSS password", () => {
  cy.fixture("users.json")
    .as("users")
    .then((users) => {
      LoginPage.fillPassword(users.opss.password)
    })
})
When("I press the login button", () => {
  LoginPage.submit()
})

Then("I should see the home page", () => {
  HomePage.assertPageTitle()
})
