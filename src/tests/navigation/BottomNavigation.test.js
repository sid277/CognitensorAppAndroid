import React from 'react';
import { shallow } from 'enzyme';
import {MainBottomNavigator} from '../../navigation/BottomNavigation';
import renderer from 'react-test-renderer';


test('should test MainBottomNavigator component', () => {
const wrapper = MainBottomNavigator();
expect(wrapper).toMatchSnapshot();
});