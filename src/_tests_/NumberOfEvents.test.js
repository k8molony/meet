// FEATURE: It must specify the number of events

/* 
Tests:
- DONE render number of events element
- DONE render input box for number of events
- DONE render number of events correctly
- number of events rendered matches input when changed
- DONE default number of events to 32
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
