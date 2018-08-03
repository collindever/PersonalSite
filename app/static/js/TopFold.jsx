import React, {Component} from 'react';
import Desk from './Desk';
import Navigation from './Navigation';

export default class TopFold extends Component {
  constructor(props){
    super(props);
    this.state = {hardwareOn : false, softwareOn: false};
    this.handleHardwareClick = this.handleHardwareClick.bind(this);
    this.handleSoftwareClick = this.handleSoftwareClick.bind(this);
  }

  handleHardwareClick(on) {
    var newHardwareState = this.state.hardwareOn ? false : true;
    var newState = {hardwareOn : newHardwareState, softwareOn: this.state.softwareOn};
    this.setState(newState);
  }

  handleSoftwareClick(on) {
    var newSoftwareState = this.state.softwareOn ? false : true;
    var newState = {hardwareOn: this.state.hardwareOn, softwareOn : newSoftwareState};
    this.setState(newState);
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  render () {
    return (
      <div id='top-fold'>
        <Navigation softwareOn={this.state.softwareOn} hardwareOn={this.state.hardwareOn} onHardwareClickChange={this.handleHardwareClick} onSoftwareClickChange={this.handleSoftwareClick}/>
        <Desk hardwareOn={this.state.hardwareOn} onHardwareClickChange={this.handleHardwareClick}/>
      </div>
    );
  }
}