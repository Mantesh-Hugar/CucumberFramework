Feature: Test the login functionality of actitime

Scenario Outline: Test the valid login

Given user is on loginPage
When user enters <username> and <password>
And click on login button
Then user should land on home page
       Examples:
       |username|password|
       |admin|manager|
       |admin1|manager123|
