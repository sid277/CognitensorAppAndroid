import 'react-native';
import React from 'react';
import DashboardHeader from '../../components/DashboardHeader';
import renderer from 'react-test-renderer';

it('renders DashboardHeader component', () => {
  const tree = renderer.create(<DashboardHeader />).toJSON();
  expect(tree).toMatchSnapshot();
});
