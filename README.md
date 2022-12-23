# meet

Connect with likeminded people in your city by finding events you are interested in.

## Objectives

- Build a serverless React PWA (for online and offline use).
- Follow a BDD & TDD methodology (scenarios & stories, red-green-refactor, quick feedback).
- Fetch event data from Google Calendar API.
- Data visualisation (number of upcoming events, & popularity of event genres)

### FEATURE 1: FILTER EVENTS BY CITY

As a user, I should be able to “filter events by city” so that I can see the list of events that take place in that city.

- Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities.
  Given user hasn’t searched for any city when the user opens the app then the user should see a list of all upcoming events.

- Scenario 2: User should see a list of suggestions when they search for a city.
  Given the main page is open when user starts typing in the city textbook then the user should see a list of cities (suggestions) that match what they’ve typed.

- Scenario 3: User can select a city from the suggested list.
  Given the user was typing “Berlin” in the city textbook and the list of suggested cities is showing when the user selects a city from the list then their city should be changed to that city and the user should receive a list of upcoming events in that city.

### FEATURE 2: SHOW/HIDE AN EVENT’S DETAILS

As a user, I should be able to show or hide an event’s details so that I can see more detailed information about a particular event.

- Scenario 1: An event element is collapsed by default.
  Given the user has selected a city, when the list populates the screen then the events will be displayed in an abbreviated form.

- Scenario 2: User can expand an event to see its details.
  Given the abbreviated list is displayed on the screen, when the user clicks on a particular event, then the event will expand to show more details.

- Scenario 3: User can collapse an event to hide its details.
  Given an event is expanded, when the user clicks on the event, then the details will be collapsed and the event will return to the abbreviated form.

### FEATURE 3: SPECIFY NUMBER OF EVENTS

As a user, I should be able to specify the number of events displayed in a city so that I can control the amount of events that I see.

- Scenario 1: When user hasn’t specified a number, 32 is the default number.
  Given the user has searched for events in a particular city, when the user does not specify the amount of search results to see, then the default amount of results will be 32.

- Scenario 2: User can change the number of events they want to see.
  Given the user has searched for events in a city, when the user changes the default number, then the number of results will be changed to what the user selects.

### FEATURE 4: USE THE APP WHEN OFFLINE

As a user, I should be able to access the app offline so that I can view events even when I have no internet connection.

- Scenario 1: Show cached data when there’s no internet connection.
  Given the app is live, when the connection to internet is lost, then the app should still work by showing data from an offline cache.

- Scenario 2: Show error when user changes the settings (city, time range).
  Given the user has a default time and city settings, when a user changes the city and time range, then an error message should be displayed.

### FEATURE 5: DATA VISUALIZATION

As a user, I should be able to visualize the number of upcoming events so that I can have a big picture of the events.

- Scenario 1: Show a chart with the number of upcoming events in each city.
  Given the user has selected a city, when the user clicks on the upcoming events button, then a chart will list the upcoming events taking place in that city.
