Feature: User login, product navigation, and logout

  As a valid user
  I want to log in to the application, add products to the cart, and log out

  Scenario: User logs in successfully, adds a product to the cart, and logs out
    Given I open the Sauce Demo login page
    When I input valid credentials
    Then I should be logged in successfully
    When I click on a product and add it to the cart
    Then the product should be added to the cart
    When I click on the logout button
    Then I should be logged out successfully
