import React from 'react';
import { shallow } from 'enzyme';
import DefaultView from '../../../components/default/DefaultView';
import renderer from 'react-test-renderer';


test('should test DefaultScrollView component', () => {
const wrapper = shallow(<DefaultView/>);
expect(wrapper).toMatchSnapshot();
});
