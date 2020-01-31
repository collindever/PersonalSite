import React, {Component} from 'react';
import Desk from './Desk';
import Navigation from './Navigation';

export default class TopFold extends Component {
  constructor(props){
    super(props);
    this.state = {hardwareOn : false, softwareOn: false, dataOn: false};
    this.handleHardwareClick = this.handleHardwareClick.bind(this);
    this.handleSoftwareClick = this.handleSoftwareClick.bind(this);
    this.handleDataClick = this.handleDataClick.bind(this);
    this.handleAboutClick = this.handleAboutClick.bind(this);
  }

  handleHardwareClick(on) {
    var newHardwareState = this.state.hardwareOn ? false : true;
    var newState = {hardwareOn : newHardwareState};
    this.setState(newState);
    var showContent = newHardwareState || this.state.softwareOn ? true : false || this.state.dataOn ? true : false;
    this.props.onContentChanged(newHardwareState, showContent, "Hardware");
  }

  handleSoftwareClick(on) {
    var newSoftwareState = this.state.softwareOn ? false : true;
    var newState = {softwareOn : newSoftwareState};
    this.setState(newState);
    var showContent = newSoftwareState || this.state.hardwareOn ? true : false || this.state.dataOn ? true : false;
    this.props.onContentChanged(newSoftwareState, showContent, "Software");
  }

  handleDataClick(on) {
    var newDataState = this.state.dataOn ? false : true;
    var newState = {dataOn : newDataState};
    this.setState(newState);
    var showContent = newDataState || this.state.hardwareOn ? true : false || this.state.spftwareOn ? true : false;
    this.props.onContentChanged(newDataState, showContent, "Data Science");
  }

  handleAboutClick(on) {
    this.props.onAboutClicked();
  }

  render () {
    return (
      <div id='top-fold'>
        <Navigation softwareOn={this.state.softwareOn} hardwareOn={this.state.hardwareOn} dataOn={this.state.dataOn} 
        onHardwareClickChange={this.handleHardwareClick} onSoftwareClickChange={this.handleSoftwareClick} onDataClickChange={this.handleDataClick} onAboutMeClick={this.handleAboutClick}/>
        <div id='top-fold-buffer'></div>
        <Desk hardwareOn={this.state.hardwareOn} onHardwareClickChange={this.handleHardwareClick}/>
      </div>
    );
  }
}