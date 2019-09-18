Feature: Login feature
Scenario: AutomationPractice login test Scenerio
Given User is already on homepage
When Title of homepage is My Store
Then User clicks on Sign in
When Title of the page is Login My Store
Then User enters username and password
And User clicks on Sign in button
Then User is able to log in