import React, {Component} from 'react';
import { render } from 'react-dom';
import TopFold from './TopFold';
import Navigation from './Navigation';

export default class Index extends Component {
  constructor(props){
    super(props);
    this.state = {showContent : false, contentTopics: []};
    this.showContentChange = this.showContentChange.bind(this);
  }

  componentDidUpdate(){
    console.log(this.state);
  }

  showContentChange(add, showContent, contentTopic){
    this.state.showContent = showContent;
    if(add){
      this.state.contentTopics.push(contentTopic);
    }else{
      for (var t in this.state.contentTopics){
        if(this.state.contentTopics[t] == contentTopic){
          this.state.contentTopics.splice(t,1);
          break;
        }
      }
    }
    console.log(this.state);
  }

  render () {
    return (
      <TopFold onContentChanged={this.showContentChange} />
    );
  }
}

render((
  <Index/>
), document.getElementById('app'));