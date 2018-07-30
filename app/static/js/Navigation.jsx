import React, {Component} from 'react';
import HardwareNav from './navComponents/HardwareNav';

export default class Navigation extends Component {
  render () {
    return (
      <div id="nav">
        <HardwareNav onClickChange={this.props.onHardwareClickChange}/>
        <h2>Software</h2>
        <h2>Data</h2>
        <h2>Resume</h2>
        <h2>Adventures</h2>
      </div>
    );
  }
}