import React, {Component} from 'react';
import Desk from './Desk';
import Navigation from './Navigation';

export default class TopFold extends Component {
  constructor(props){
    super(props);
    this.state = {hardwareOn : false}
  }

  render () {
    return (
      <div id='top-fold'>
        <Navigation />
        <Desk hardwareOn={this.state.hardwareOn}/>
      </div>
    );
  }
}