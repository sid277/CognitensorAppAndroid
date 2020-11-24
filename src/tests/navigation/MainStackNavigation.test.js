import React from 'react';
import { shallow } from 'enzyme';
import {MainStackNavigator} from '../../navigation/MainStackNavigation';
import renderer from 'react-test-renderer';


test('should test MainStackNavigator component', () => {
    const authState = {isLoading: true,
        isSignout: false,
        userToken: null,}
const wrapper = MainStackNavigator({authState});
expect(wrapper).toMatchSnapshot();
});