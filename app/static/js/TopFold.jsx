import React, {Component} from 'react';
import Desk from './Desk';
import Navigation from './Navigation';

export default class TopFold extends Component {
  constructor(props){
    super(props);
    this.state = {hardwareOn : false}
    this.handleHardwareClick = this.handleHardwareClick.bind(this);
  }

  handleHardwareClick(on) {
    var newHardwareState = this.state.hardwareOn ? false : true;
    var newState = {hardwareOn : newHardwareState};
    this.setState(newState);
  }

  render () {
    return (
      <div id='top-fold'>
        <Navigation onHardwareClickChange={this.handleHardwareClick}/>
        <Desk hardwareOn={this.state.hardwareOn} onHardwareClickChange={this.handleHardwareClick}/>
      </div>
    );
  }
}