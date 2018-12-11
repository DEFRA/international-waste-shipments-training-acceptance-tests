Feature: Creating waste shipment notification form
  As a company that ships waste abroad
  I want to create a new waste shipment notification
  So that I can notify my intent to ship waste overseas

  Scenario: Creating waste recovery notification for EA authority
    Given I create a new notification
      And I select the Environment Agency as authority
     When I choose a recovery notification
     Then I will be shown a notification number
