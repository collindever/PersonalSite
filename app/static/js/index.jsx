import React from 'react';
import { render } from 'react-dom';
import Desk from './Desk';
import Navigation from './Navigation';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Orbitron', 'Lato']
  }
});

render((
  <div id='top-fold'>
    <Navigation />
    <Desk />
  </div>
), document.getElementById('main'));