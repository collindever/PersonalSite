import React, {Component} from 'react';
import ProjectNav from './navComponents/ProjectNav';

export default class Navigation extends Component {
  render () {
    return (
      <div id="nav">
        <ProjectNav name='Hardware' on={this.props.hardwareOn} onClickChange={this.props.onHardwareClickChange}/>
        <ProjectNav name='Software' on={this.props.softwareOn} onClickChange={this.props.onSoftwareClickChange}/>
        <div id='Resume-nav' class="nav-element">
          <h2>Resume</h2>
        </div>
        <div id='Adventure-nav' class="nav-element">
          <h2>Adventures</h2>
        </div>
      </div>
    );
  }
}