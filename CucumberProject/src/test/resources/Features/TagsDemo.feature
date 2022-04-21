@FunctionalTest
Feature: Using of tags in Cucumber

@SmokeTest
Scenario: Scenario1
Given this  is scenario1

@SmokeTest
Scenario: Scenario2
Given this  is scenario2

@SanityTest
Scenario: Scenario3
Given this  is scenario3

@SmokeTest
@SanityTest
Scenario: Scenario4
Given this  is scenario4


Scenario: Scenario5
Given this  is scenario5

Scenario: Scenario6
Given this  is scenario6