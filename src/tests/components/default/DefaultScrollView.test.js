import React from 'react';
import { shallow } from 'enzyme';
import DefaultScrollView from '../../../components/default/DefaultScrollView';
import renderer from 'react-test-renderer';


test('should test DefaultScrollView component', () => {
const wrapper = shallow(<DefaultScrollView/>);
expect(wrapper).toMatchSnapshot();
});
