Feature: Ecommerce validation

  @Validation
  Scenario: Placing the order
    Given I login to ecommerce2 application
    Then verify error message is displayed