import React from 'react';
import { shallow } from 'enzyme';
import AppHeader from '../../components/AppHeader';
import { create } from 'react-test-renderer';


test('should test AppHeader component', () => {
    const scene = {
        descriptor : {
            options : {
                title : "Title_test1",
        }},
      }
      const previous = "previous";
      const navigation = {
        pop : "test_pop",
      }

const wrapper = create(<AppHeader scene={scene} navigation ={navigation}/>);
expect(wrapper).toMatchSnapshot();
});

// test('renders correctly', () => {
//     const tree = renderer.create(<AppHeader />).toJSON();
//     expect(tree).toMatchSnapshot();
//   });