import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';
import { mockData } from '../mock-data';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
  test('An event element is collapsed by default.', ({ given, when, then }) => {
    let AppWrapper;
    given('the list of events is open', async () => {
      AppWrapper = await mount(<App />);
      AppWrapper.update();
      expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
    });

    when('the user scrolls through the list of events', () => {
    });

    then('the events will be displayed in an abbreviated form.', () => {
      expect(AppWrapper.find('.event .details')).toHaveLength(0);
    });
  });

  test('User can expand an event to see its details.', ({ given, when, then }) => {
    let AppWrapper;
    given('the abbreviated list is displayed on the screen', async () => {
      AppWrapper = await mount(<App />);
      AppWrapper.update();
      expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
    });

    when('the user clicks on a particular event', () => {
      AppWrapper.update();
      AppWrapper.find('.event .show-details').at(0).simulate('click');
    });

    then('the event will expand to show more details.', () => {
      expect(AppWrapper.find('.event .details')).toHaveLength(1);
    });
  });

  test('User can collapse an event to hide its details.', ({ given, when, then, and }) => {
    let AppWrapper;
    given('an event is expanded', async () => {
      AppWrapper = await mount(<App />);
      AppWrapper.update();
      AppWrapper.find('.event .show-details').at(0).simulate('click');
    });

    when('the user clicks on the event', () => {
      AppWrapper.update();
      AppWrapper.find('.event .hide-details').at(0).simulate('click');
    });

    then('the event will return to the abbreviated form.', () => {
      expect(AppWrapper.find('.event .details')).toHaveLength(0);
    });
  });
});