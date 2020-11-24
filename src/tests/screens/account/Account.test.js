import React from 'react';
import { create } from 'react-test-renderer';
import Account from '../../../screens/account/Account';
import {signIn} from '../../../tests/screens/sampleAuthcontext';


test('should test Account component', () => {
const wrapper = create(<Account signOut={signIn}/>);
expect(wrapper).toMatchSnapshot();
});