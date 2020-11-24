import React from 'react';
import { shallow } from 'enzyme';
import Settings from '../../../screens/account/Settings';
import renderer from 'react-test-renderer';


test('should test Settings component', () => {
const wrapper = shallow(<Settings />);
expect(wrapper).toMatchSnapshot();
});