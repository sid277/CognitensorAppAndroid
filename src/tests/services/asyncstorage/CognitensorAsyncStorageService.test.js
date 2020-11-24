import React from 'react';
import { shallow } from 'enzyme';
import {CognitensorAsyncStorageService} from '../../../services/asyncstorage/CognitensorAsyncStorageService';
import renderer from 'react-test-renderer';


test('should test CognitensorAsyncStorageService component', () => {
const wrapper = CognitensorAsyncStorageService;
expect(wrapper).toMatchSnapshot();
});