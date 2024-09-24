import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const usernameField = '//*[@id="user-name"]';
const passwordField = '//*[@id="password"]';
const loginButton = '//*[@id="login-button"]';
const productTitle = '//*[@id="item_4_title_link"]/div';
const addToCartButton = '//*[@id="add-to-cart"]';
const cartBadge = '//*[@id="shopping_cart_container"]/a/span';
const menuButton = '//*[@id="react-burger-menu-btn"]';
const logoutLink = '//*[@id="logout_sidebar_link"]';

// Open the Sauce Demo login page
Given("I open the Sauce Demo login page", () => {
  cy.visit('https://www.saucedemo.com');
});

// Input valid credentials
When("I input valid credentials", () => {
  cy.xpath(usernameField).type("standard_user");
  cy.xpath(passwordField).type("secret_sauce");
  cy.xpath(loginButton).click();
});

// Verify successful login
Then("I should be logged in successfully", () => {
  cy.url().should("include", "/inventory.html");
});

// Add product to the cart
When("I click on a product and add it to the cart", () => {
  cy.xpath(productTitle).click();
  cy.xpath(addToCartButton).click();
});

// Verify product was added to the cart
Then("the product should be added to the cart", () => {
  cy.xpath(cartBadge).should("contain", "1");
});

// Logout from the application
When("I click on the logout button", () => {
  cy.xpath(menuButton).click();
  cy.xpath(logoutLink).click();
});

// Verify successful logout
Then("I should be logged out successfully", () => {
  cy.url().should("include", "/");
});
