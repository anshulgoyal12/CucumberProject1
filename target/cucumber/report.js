$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 2,
  "name": "Login",
  "description": "\r\nIn order to perform Login successfully\r\nAs a user\r\nI want to enter correct username and password",
  "id": "login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@sanity"
    },
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 221188,
  "status": "passed"
});
formatter.before({
  "duration": 65581,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "user navigates to venors depot website",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "user validate the home page title",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStep.user_navigates_to_venors_depot_website()"
});
formatter.result({
  "duration": 147054654,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.user_validate_the_home_page_title()"
});
formatter.result({
  "duration": 90794,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "In order to verify login to vendors depot",
  "description": "",
  "id": "login;in-order-to-verify-login-to-vendors-depot",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "user enters the username",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user enters the password",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user should be successfully logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.user_enters_the_username()"
});
formatter.result({
  "duration": 76755,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.user_enters_the_password()"
});
formatter.result({
  "duration": 72914,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.user_should_be_logged_in_successfully()"
});
formatter.result({
  "duration": 62019,
  "status": "passed"
});
formatter.after({
  "duration": 65721,
  "status": "passed"
});
formatter.after({
  "duration": 52102,
  "status": "passed"
});
formatter.before({
  "duration": 76966,
  "status": "passed"
});
formatter.before({
  "duration": 46445,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "user navigates to venors depot website",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "user validate the home page title",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStep.user_navigates_to_venors_depot_website()"
});
formatter.result({
  "duration": 80527,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.user_validate_the_home_page_title()"
});
formatter.result({
  "duration": 59994,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "In order to verify login to vendors depot as Invalid user",
  "description": "",
  "id": "login;in-order-to-verify-login-to-vendors-depot-as-invalid-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "user enters invalid username",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user enters invalid password",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user should not be successfully logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.user_enters_invalid_username()"
});
formatter.result({
  "duration": 1906457,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.user_enters_invalid_password()"
});
formatter.result({
  "duration": 75499,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.user_should_not_be_successfully_logged_in()"
});
formatter.result({
  "duration": 66209,
  "status": "passed"
});
formatter.after({
  "duration": 45118,
  "status": "passed"
});
formatter.after({
  "duration": 44628,
  "status": "passed"
});
});