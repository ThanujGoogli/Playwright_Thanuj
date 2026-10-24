Feature: Ecommerce validation
  @Regression
  Scenario: Placing order for a product and verifying the order in order history
    Given I login to ecommerce application with "thanujgoogli@gmail.com" and "Test@1234"
    When Add "ZARA COAT 3" to cart 
    Then Place order  by selecting country as "India" and verify order in order history
    Then Verify the order id in order history matches the order id in confirmation page
    