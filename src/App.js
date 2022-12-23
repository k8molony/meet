import React, { Component } from 'react';
import './App.css';
import './nprogress.css';

import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import WelcomeScreen from './WelcomeScreen';

import { extractLocations, getEvents, checkToken, getAccessToken } from './api';
import { OfflineAlert } from './Alert';


class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    selectedLocation: 'all',
    showWelcomeScreen: undefined
  }


  updateEvents = (location, eventCount) => {
    const { numberOfEvents } = this.state;
    if (location === undefined) location = this.state.selectedLocation;
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ?
        events :
        events.filter((event) => event.location === location);
      eventCount = eventCount === undefined ? numberOfEvents : eventCount;
      this.setState({
        events: locationEvents.slice(0, eventCount),
        selectedLocation: location,
        numberOfEvents: eventCount
      });
    });
  }


  async componentDidMount() {
    this.mounted = true;
    const accessToken = localStorage.getItem('access_token');
    let shouldGetEvents;
    if (navigator.onLine) {
      const isTokenValid = (await checkToken(accessToken)).error ? false : true;
      const searchParams = new URLSearchParams(window.location.search);
      const code = searchParams.get("code");
      this.setState({ showWelcomeScreen: !(code || isTokenValid) });
      shouldGetEvents = (code || isTokenValid) && this.mounted;
    } else {
      shouldGetEvents = accessToken && this.mounted;
      this.setState({showWelcomeScreen: false});
    }


    if (shouldGetEvents) {
      getEvents().then((events) => {
        if (this.mounted) {
          events=events.slice(0,this.state.eventCount);
          this.setState({ events, locations: extractLocations(events) });
        }
      });
    }
  }

  componentWillUnmount(){
    this.mounted = false;
  }


  render() {
    const { locations, events, numberOfEvents } = this.state;

    if (this.state.showWelcomeScreen === undefined) return <div className="App" />
    return (
      <div className="App">
        {!navigator.onLine &&
        <OfflineAlert
          text='You are currently offline. The event list may not be up-to-date'
          className='OfflineAlert'
        />}
        <h1>Meet App</h1>
        <h4>Choose your location:</h4>
        <CitySearch locations={locations} updateEvents={this.updateEvents} />
        <h4>Choose number of events to display:</h4>
        <NumberOfEvents numberOfEvents={numberOfEvents} updateEvents={this.updateEvents} />
        <EventList  events={events} />
        <WelcomeScreen 
          showWelcomeScreen={this.state.showWelcomeScreen} 
          getAccessToken={() => { getAccessToken() }} 
        />
      </div>
    );
  }
}
export default App;