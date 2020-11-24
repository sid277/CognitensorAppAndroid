import React from 'react';
import { shallow } from 'enzyme';
import Dashboards from '../../screens/Dashboards';
import renderer from 'react-test-renderer';


test('should test Dashboards component', () => {
const wrapper = shallow(<Dashboards />);
expect(wrapper).toMatchSnapshot();
});