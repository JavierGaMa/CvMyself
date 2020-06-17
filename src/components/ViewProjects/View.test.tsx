import React from 'react';
import View from './View';
import { shallow } from 'enzyme';
import Projects from '../projects/Projects';

describe('View', () => {
 
  it('should show Studies component', () => {
    const wrapper = shallow(<View />);
    expect(wrapper.find(Projects)).toHaveLength(1);
  });
})