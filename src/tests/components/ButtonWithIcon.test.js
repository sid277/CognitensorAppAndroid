import React from 'react';
import { shallow } from 'enzyme';
import ButtonWithIcon from '../../components/ButtonWithIcon';
import renderer from 'react-test-renderer';


test('should test AppHeader component', () => {
const wrapper = shallow(<ButtonWithIcon />);
expect(wrapper).toMatchSnapshot();
});