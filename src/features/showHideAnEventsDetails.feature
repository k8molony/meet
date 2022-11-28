Feature: Show/Hide an Event's Details

  Scenario: An event element is collapsed by default.
    Given the list of events is open
    When the user scrolls through the list of events
    Then the events will be displayed in an abbreviated form.
  Scenario: User can expand an event to see its details.
    Given the abbreviated list is displayed on the screen
    When the user clicks on a particular event
    Then the event will expand to show more details.
  Scenario: User can collapse an event to hide its details.
    Given an event is expanded
    When the user clicks on the event
    Then the event will return to the abbreviated form.
