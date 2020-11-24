import React from 'react';
import { mount } from 'enzyme';
import CognitensorEndpoints from '../../../services/network/CognitensorEndpoints';
import renderer from 'react-test-renderer';

test('should test CognitensorEndpoints component', () => {
const wrapper = CognitensorEndpoints;
expect(wrapper).toMatchSnapshot();
});