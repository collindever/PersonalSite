import React, {Component} from 'react';
import ProjectNav from './navComponents/ProjectNav';

export default class Navigation extends Component {
  render () {
    return (
      <div id="nav">
        <ProjectNav name='Hardware' on={this.props.hardwareOn} onClickChange={this.props.onHardwareClickChange}/>
        <ProjectNav name='Software' on={this.props.softwareOn} onClickChange={this.props.onSoftwareClickChange}/>
        <ProjectNav name='Data Science' on={this.props.dataOn} onClickChange={this.props.onDataClickChange}/>
        <div id='Resume-nav' className="clickable-nav-element">
          <h2 onClick={this.props.onAboutMeClick}>About Me</h2>
        </div>
        <div id='Adventure-nav' className="nav-element">
          <h2>Adventures</h2>
        </div>
      </div>
    );
  }
}