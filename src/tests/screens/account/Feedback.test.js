import React from 'react';
import { shallow } from 'enzyme';
import Feedback from '../../../screens/account/Feedback';
import renderer from 'react-test-renderer';


test('should test Feedback component', () => {
const wrapper = shallow(<Feedback />);
expect(wrapper).toMatchSnapshot();
});