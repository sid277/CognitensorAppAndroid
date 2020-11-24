import React from 'react';
import { shallow } from 'enzyme';
import {DashboardStackNavigator,AccountStackNavigator,NotificationStackNavigator,} from '../../navigation/StackNavigation';


test('should test DashboardStackNavigator component', () => {
const wrapper = shallow(<DashboardStackNavigator />);
expect(wrapper).toMatchSnapshot();
});

test('should test AccountStackNavigator component', () => {
    const wrapper = shallow(<AccountStackNavigator />);
    expect(wrapper).toMatchSnapshot();
    });

test('should test NotificationStackNavigator component', () => {
    const wrapper = shallow(<NotificationStackNavigator />);
    expect(wrapper).toMatchSnapshot();
    });
