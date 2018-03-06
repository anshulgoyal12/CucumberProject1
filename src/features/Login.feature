@sanity @regression
Feature: Login
  
  In order to perform Login successfully
  As a user
  I want to enter correct username and password

  Background: 
    Given user navigates to venors depot website
    When user validate the home page title

@A1
  Scenario: In order to verify login to vendors depot
    Then user enters the username
    And user enters the password
    Then user should be successfully logged in

  Scenario: In order to verify login to vendors depot as Invalid user
    Then user enters invalid username
    And user enters invalid password
    Then user should not be successfully logged in
