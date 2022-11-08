// FEATURE: It must specify the number of events

/* 
Tests:
- DONE render number of events element
- DONE render input box for number of events
- DONE render number of events correctly
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

  test('render button to set number of events', () => {
    expect (NumberOfEventsWrapper.find('.number-of-events-button')).toHaveLength(1);
  });

  test('render list when button is clicked', () => {
    NumberOfEventsWrapper.find('.number-of-events-input').at(0).simulate('click');
    expect(NumberOfEventsWrapper.find('.number-of-events')).toHaveLength(1);
  })

  test('render default input for number of events of 32', () => {
    expect(NumberOfEventsWrapper.find('.number-of-events-input').prop('value')).toBe(32);
  });

  test('change state to match number input', () => {
    NumberOfEventsWrapper.setState({ numberOfEvents: 32 });
    const eventObject = { target: {value: 10} };
    NumberOfEventsWrapper.find('.number-of-events-input').simulate('change', eventObject);
    expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(10);
  });

  test('selecting a number outside of range should generate error', () => {
    NumberOfEventsWrapper.setState({ numberOfEvents: 35 });
    expect(NumberOfEventsWrapper.find('.errorText')).toHaveLength(1);
  });
});
