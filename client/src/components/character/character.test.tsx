import React from 'react';
import ReactDOM from 'react-dom';
import Character from './character';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Character />, div);
  ReactDOM.unmountComponentAtNode(div);
});
