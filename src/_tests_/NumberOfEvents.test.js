// FEATURE: It must specify the number of events

/* 
Tests:
- DONE render number of events element (2 ms)
- DONE render input box for number of events (1 ms)
- DONE render number of events correctly (1 ms)
- DONE render button to set number of events (1 ms)
- DONE render list when button is clicked (1 ms)
- DONE render default input for number of events of 32 (1 ms)
- DONE change state to match number input (2 ms)
*/


import React from "react";
import { shallow } from 'enzyme';
import NumberOfEvents from "../NumberOfEvents";

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

  test('render number of events element', () => {
    expect(NumberOfEventsWrapper.find('.number-of-events')).toHaveLength(1);
  });

  test('render input box for number of events', () => {
    expect(NumberOfEventsWrapper.find('.number-of-events-input')).toHaveLength(1);
  });

  test('render number of events correctly', () => {
    const numberQuery = NumberOfEventsWrapper.state('numberQuery');
    expect(NumberOfEventsWrapper.find('.number-of-events').prop('value')).toBe(numberQuery);
  });

  test('render default input for number of events of 32', () => {
    expect(NumberOfEventsWrapper.find('.number-of-events-input').prop('value')).toBe(32);
  });
});
