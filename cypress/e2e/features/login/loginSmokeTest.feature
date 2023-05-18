Feature: Login smoke test
  @e2e-test
  Scenario: OPSS login test
    Given I am on the login page for PSD
    When I enter a valid OPSS email
    And I enter a valid OPSS password
    And I press the login button
    Then I should see the home page
