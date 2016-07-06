import React from 'react';
import { render } from 'react-dom';
import App from './App.js';

window.onload = () => {
  render(<App />, document.getElementById('root'));
}
