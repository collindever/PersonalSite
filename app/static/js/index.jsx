import React from 'react';
import { render } from 'react-dom';
import Desk from './Desk';
import Navigation from './Navigation';

render((
  <div id='top-fold'>
    <Navigation />
    <Desk />
  </div>
), document.getElementById('main'));