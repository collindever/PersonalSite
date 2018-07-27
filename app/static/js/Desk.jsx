// desk.jsx
import React, {Component} from 'react';
import Laptop from './deskComponents/Laptop';
import CoffeeCup from './deskComponents/CoffeeCup';
import Papers from './deskComponents/Papers';
import PictureFrame from './deskComponents/PictureFrame';
import SolderIron from './deskComponents/SolderIron';

export default class Desk extends Component {
  render () {
    return (
      <div id="desk">
        <Laptop />
        <CoffeeCup />
        <Papers />
        <PictureFrame />
        <SolderIron />
      </div>
    );
  }
}