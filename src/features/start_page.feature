@ci
Feature: Continuous integration check of the project
  As a contributor to this project
  I want to know a change I made hasn't broken it (though it may have failing tests)
  So that we have a reliable base on which to build our acceptance tests

  Scenario: Check project is working
    Given I open the start page
     Then I expect to be on the start page
