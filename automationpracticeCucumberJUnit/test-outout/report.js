$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login feature",
  "description": "",
  "id": "login-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "AutomationPractice login test Scenerio",
  "description": "",
  "id": "login-feature;automationpractice-login-test-scenerio",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "User is already on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Title of homepage is My Store",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "User clicks on Sign in",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Title of the page is Login My Store",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters username and password",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User clicks on Sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User is able to log in",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_StepDefinition.User_is_already_on_homepage()"
});
formatter.result({
  "duration": 140165234,
  "status": "passed"
});
formatter.match({
  "location": "Login_StepDefinition.Title_of_homepage_is_My_Store()"
});
formatter.result({
  "duration": 75983,
  "status": "passed"
});
formatter.match({
  "location": "Login_StepDefinition.User_clicks_on_Sign_in()"
});
formatter.result({
  "duration": 95694,
  "status": "passed"
});
formatter.match({
  "location": "Login_StepDefinition.Title_of_the_page_is_Login_My_Store()"
});
formatter.result({
  "duration": 84037,
  "status": "passed"
});
formatter.match({
  "location": "Login_StepDefinition.User_enters_username_and_password()"
});
formatter.result({
  "duration": 183917,
  "status": "passed"
});
formatter.match({
  "location": "Login_StepDefinition.User_clicks_on_Sign_in_button()"
});
formatter.result({
  "duration": 80335,
  "status": "passed"
});
formatter.match({
  "location": "Login_StepDefinition.User_is_able_to_log_in()"
});
formatter.result({
  "duration": 206385,
  "status": "passed"
});
});