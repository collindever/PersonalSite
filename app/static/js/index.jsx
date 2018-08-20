import React, {Component} from 'react';
import { render } from 'react-dom';
import TopFold from './TopFold';
import Navigation from './Navigation';

export default class Index extends Component {
  constructor(props){
    super(props);
    this.state = {showContent : false, contentTopics: []};
  }

  render () {
    return (
      <TopFold/>
    );
  }
}

render((
  <Index/>
), document.getElementById('app'));