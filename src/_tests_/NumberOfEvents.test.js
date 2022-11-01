// FEATURE: It must specify the number of events

/* 
Tests:
- DONE render number of events element
- DONE render input box for number
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

  test('render element', () => {
    expect(NumberOfEventsWrapper.find('.number-of-events')).toHaveLength(1);
  });

  test('render input for number of events', () => {
    expect(NumberOfEventsWrapper.find('.number-of-events-input')).toHaveLength(1);
  });

  test('render default input for number of events of 32', () => {
    expect(NumberOfEventsWrapper.find('.number-of-events-input').prop('value')).toBe(32);
  });
});
