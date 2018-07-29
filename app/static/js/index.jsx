import React from 'react';
import { render } from 'react-dom';
import WebFont from 'webfontloader';
import TopFold from './TopFold';

WebFont.load({
  google: {
    families: ['Orbitron', 'Lato']
  }
});

render((
  <TopFold/>
), document.getElementById('main'));