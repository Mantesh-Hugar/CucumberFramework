
Feature: Test the login functionality of actitime using DataTable

Scenario: Test the valid login using DataTable

Given user is on loginPage 
When user enters credentials using DataTable
       |admin|manager|
And click on login button
Then user should land on home page
