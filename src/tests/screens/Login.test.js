import Login from '../../screens/Login';
import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';

import {signIn} from '../../tests/screens/sampleAuthcontext';

test('should test Login component', () => {
const wrapper = create(<Login signIn={signIn}/>);
expect(wrapper).toMatchSnapshot();
});