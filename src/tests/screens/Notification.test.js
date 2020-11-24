import React from 'react';
import { shallow } from 'enzyme';
import Notification from '../../screens/Notification';
import renderer from 'react-test-renderer';


test('should test Notification component', () => {
const wrapper = shallow(<Notification />);
expect(wrapper).toMatchSnapshot();
});