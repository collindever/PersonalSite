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
    var showContent = newHardwareState || this.state.softwareOn ? true : false;
    this.props.onContentChanged(newHardwareState, showContent, "Hardware");
  }

  handleSoftwareClick(on) {
    var newSoftwareState = this.state.softwareOn ? false : true;
    var newState = {hardwareOn: this.state.hardwareOn, softwareOn : newSoftwareState};
    this.setState(newState);
    var showContent = newSoftwareState || this.state.hardwareOn ? true : false;
    this.props.onContentChanged(newSoftwareState, showContent, "Software");
  }

  render () {
    return (
      <div id='top-fold'>
        <Navigation softwareOn={this.state.softwareOn} hardwareOn={this.state.hardwareOn} onHardwareClickChange={this.handleHardwareClick} onSoftwareClickChange={this.handleSoftwareClick}/>
        <div id='top-fold-buffer'></div>
        <Desk hardwareOn={this.state.hardwareOn} onHardwareClickChange={this.handleHardwareClick}/>
      </div>
    );
  }
}