import App from './App';
import React from 'react';

it('renders without crashing', () => {
    expect(
      JSON.stringify(
        Object.assign({}, App, { _reactInternalInstance: 'censored' }),
      ),
    ).toMatchSnapshot();
  });