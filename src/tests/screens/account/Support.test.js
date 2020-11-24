import React from 'react';
import { shallow } from 'enzyme';
import Support from '../../../screens/account/Support';
import renderer from 'react-test-renderer';


test('should test Support component', () => {
const wrapper = shallow(<Support />);
expect(wrapper).toMatchSnapshot();
});