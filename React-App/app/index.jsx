import React, {Component} from 'react';
import { render } from 'react-dom';
import TopFold from './TopFold';
import Content from './Content';

export default class Index extends Component {
  constructor(props){
    super(props);
    this.state = {showAbout: false, showContent: false, contentTopics: []};
    this.showContentChange = this.showContentChange.bind(this);
    this.showAbout = this.showAbout.bind(this);
  }

  showContentChange(add, showContent, contentTopic){
    var tempTopics = this.state.contentTopics;
    if(add){
      tempTopics.push(contentTopic);
    }else{
      for (var t in tempTopics){
        if(tempTopics[t] == contentTopic){
          tempTopics.splice(t,1);
          break;
        }
      }
    }
    this.setState({showContent: showContent, contentTopics: tempTopics});
  }

  showAbout() {
    var newAboutState = this.state.showAbout ? false : true;
    var newState = {showAbout: newAboutState, showContent: this.state.showContent, contentTopics: this.state.contentTopics};
    this.setState(newState);
  }

  render () {
    return (
      <div id="stuff">
        <TopFold onContentChanged={this.showContentChange} onAboutClicked={this.showAbout} />
        <Content showAbout={this.state.showAbout} showContent={this.state.showContent} contentTopics={this.state.contentTopics} />
     </div>
    );
  }
}

render((
  <Index/>
), document.getElementById('app'));