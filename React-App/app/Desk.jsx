// desk.jsx
import React, {Component} from 'react';
import Laptop from './deskComponents/Laptop';
import CoffeeCup from './deskComponents/CoffeeCup';
import Papers from './deskComponents/Papers';
import PictureFrame from './deskComponents/PictureFrame';
import SolderIron from './deskComponents/SolderIron';
import SolderIronOverlay from './deskComponents/SolderIronOverlay';

export default class Desk extends Component {
  render () {
    return (
      <div id='desk'>
        <Papers />
        <PictureFrame />
        <Laptop />
        <div id='solder-iron-container' >
          <SolderIron />
          <SolderIronOverlay on={this.props.hardwareOn} onClickChange={this.props.onHardwareClickChange} />
        </div>
        <CoffeeCup />
      </div>
    );
  }
}