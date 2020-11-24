import 'react-native';
import React from 'react';
import LoginInput from '../../components/LoginInput';
import renderer from 'react-test-renderer';

it('renders LoginInput component', () => {
  const tree = renderer.create(<LoginInput />).toJSON();
  expect(tree).toMatchSnapshot();
});
