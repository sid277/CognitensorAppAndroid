import React from 'react';
import {apiStateReducer} from '../../reducers/ApiStateReducer';


test('should test apiStateReducer for API_FETCH_INIT action type', () => {
    const state = {data: [],isLoading: true,isError: false,}
    const action = {type: "API_FETCH_INIT", payload: "test_payload"}
    const wrapper = apiStateReducer(state, action );
    expect(wrapper).toEqual({...state,isLoading: true,isError: false,});
    });

test('should test apiStateReducer for API_FETCH_SUCCESS action type', () => {
    const state = {data: [],isLoading: true,isError: false,}
    const action = {type: "API_FETCH_SUCCESS", payload: "test_payload"}
    const wrapper = apiStateReducer(state, action );
    expect(wrapper).toEqual({...state,isLoading: false,isError: false,data: action.payload,});
    });
    
test('should test apiStateReducer for API_FETCH_FAILURE action type', () => {
    const state = {data: [],isLoading: true,isError: false,}
    const action = {type: "API_FETCH_FAILURE", payload: "test_payload"}
    const wrapper = apiStateReducer(state, action );
    expect(wrapper).toEqual({...state,isLoading: false,isError: true,});
    });
