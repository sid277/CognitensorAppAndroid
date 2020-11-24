import React from 'react';
import { shallow } from 'enzyme';
import {authReducer} from '../../reducers/AuthReducer';
import renderer from 'react-test-renderer';


test('should test authReducer component', () => {
const wrapper = authReducer(undefined, {});
expect(wrapper).toMatchSnapshot();
});

test('should test authReducer for RESTORE_TOKEN action type', () => {
    const state = {isLoading: true,isSignout: false,userToken: null,}
    const action = {type: "RESTORE_TOKEN",token: "test_token"}
    const wrapper = authReducer(state, action );
    expect(wrapper).toEqual({...state,userToken: action.token,isLoading: false,});
    });
    

test('should test authReducer for SIGN_IN action type', () => {
    const state = {isLoading: true,isSignout: false,userToken: null,}
    const action = {type: "SIGN_IN",token: "test_token"}
    const wrapper = authReducer(state, action );
    expect(wrapper).toEqual({...state,isSignout: false,userToken: action.token,});
    });

test('should test authReducer for SIGN_OUT action type', () => {
    const state = {isLoading: true,isSignout: false,userToken: null,}
    const action = {type: "SIGN_OUT",token: "test_token"}
    const wrapper = authReducer(state, action );
    expect(wrapper).toEqual({...state,isSignout: true,userToken: null,});
    });