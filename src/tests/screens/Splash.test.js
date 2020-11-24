import React from 'react';
import { shallow } from 'enzyme';
import Splash from '../../screens/Splash';
import renderer from 'react-test-renderer';


test('should test Splash component', () => {
const wrapper = shallow(<Splash />);
expect(wrapper).toMatchSnapshot();
});