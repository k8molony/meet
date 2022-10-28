// FEATURE: It must specify the number of events

/* 
Tests:
- default amount of events should be 32
- user can change the number of events displayed
- text box for user input
- must display the number of events input by the user
*/


import React from "react";
import { shallow } from 'enzyme';
import NumberOfEvents from "../NumberOfEvents";

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

  test('render number of events text input', () => {
    expect(NumberOfEventsWrapper.find('.number-of-events')).toHaveLength(1);
  });
});