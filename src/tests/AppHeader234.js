import React from 'react';
import { shallow } from 'enzyme';
import AppHeader from '../components/AppHeader';
test('should test AppHeader component', () => {
const wrapper = shallow(<AppHeader />);
expect(wrapper).toMatchSnapshot();
});
