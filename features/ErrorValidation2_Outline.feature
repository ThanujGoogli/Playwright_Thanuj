Feature: Ecommerce validation

  @Validation
  Scenario Outline: Placing the order using multiple test data
    Given I login to ecommerce2 application using "<username>" and "<password>"
    Then verify error message is displayed for invalid data

    Examples:
      | username        | password    |
      | hello@gmail.com | test123@    |
      | Hekko@gmail.com | testtest123 |
