import React from 'react';
import App from './App';
import {  mount } from 'enzyme';
import { MemoryRouter } from 'react-router'
import Home from './components/Home';
import Studies from './components/Studies/Studies';


describe('App', () => {
  it('should show Home component ', () => {
    const component = mount( <MemoryRouter >
        <App/>
     </MemoryRouter>
    );
    console.log(component);
    
    expect(component.find(Home)).toHaveLength(1);
  })
  it('should show Studies component', () => {
    const component = mount( <MemoryRouter initialEntries={["/studies"]}>
        <Studies/>
</MemoryRouter>
    );
   expect(component.find(Studies)).toHaveLength(1);
  })
})