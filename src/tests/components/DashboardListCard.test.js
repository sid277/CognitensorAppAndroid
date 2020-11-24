import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import DashboardListCard from '../../components/DashboardListCard';

test('should test DashboardListCard component', () => {
  const item = {
    dashboardTitle : "Dashboard_test1"
  }
  const wrapper = shallow(<DashboardListCard item = {item}/>);
  expect(wrapper).toMatchSnapshot();
  });

// it('renders DashboardListCard component', () => {
//   const tree = renderer.create(<DashboardListCard/>).toJSON();
//   expect(tree).toMatchSnapshot();
// });
