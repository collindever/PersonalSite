import React, {Component} from 'react';
import { render } from 'react-dom';
import TopFold from './TopFold';
import Navigation from './Navigation';
import Content from './Content'

export default class Index extends Component {
  constructor(props){
    super(props);
    this.state = {showContent : false, contentTopics: []};
    this.showContentChange = this.showContentChange.bind(this);
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

  render () {
    return (
      <div id="stuff">
        <TopFold onContentChanged={this.showContentChange} />
        <Content showContent={this.state.showContent} contentTopics={this.state.contentTopics} />
     </div>
    );
  }
}

render((
  <Index/>
), document.getElementById('app'));