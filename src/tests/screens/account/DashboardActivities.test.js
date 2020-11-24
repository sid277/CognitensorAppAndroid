import React from 'react';
import { shallow } from 'enzyme';
import DashboardActivities from '../../../screens/account/DashboardActivities';
import renderer from 'react-test-renderer';


test('should test DashboardActivities component', () => {
const wrapper = shallow(<DashboardActivities />);
expect(wrapper).toMatchSnapshot();
});