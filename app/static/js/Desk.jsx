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
      <div>
        <Laptop />
        <CoffeeCup />
        <Papers />
        <PictureFrame />
        <SolderIron />
      </div>
    );
  }
}


// <div>
//   <canvas id="laptop" height={350} width={375}/>
//   <canvas id="coffee-cup" height={100} width={85}/>
//   <canvas id="papers" height={250} width={200}/>
//   <canvas id="picture-frame" height={100} width={100}/>
//   <canvas id="solder-iron" height={175} width={200}/>
// </div>