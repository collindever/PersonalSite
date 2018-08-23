import React, {Component} from 'react';
const Markdown = require('react-markdown');

export default class Content extends Component {
  constructor(props){
    super(props);
    this.state = {content: {}};
    this.addContent = this.addContent.bind(this);
    this.fetchIntros = this.fetchIntros.bind(this);
    this.removeIntros = this.removeIntros.bind(this);
  }

  componentDidUpdate() {
    if (this.props.showContent) {
      var topicLength = this.props.contentTopics.length;
      if (topicLength > 0){
        if(topicLength > Object.keys(this.state.content).length) {
          this.fetchIntros(topicLength);
        }else if (topicLength < Object.keys(this.state.content).length) {
          this.removeIntros();
        }
      }
    } else if(Object.keys(this.state.content).length > 0) {
      this.setState({content: {}});
    }
  }

  fetchIntros(topicLength) {
    for (var i = 0; i < topicLength; i++){
      if (!this.state.content.hasOwnProperty(this.props.contentTopics[i])){
        fetch('./project/snippets?type=' + this.props.contentTopics[i])
          .then(response => response.json())
          .then(data => this.addContent(data))
      }
    }
  }

  removeIntros() {
    var contentKeys = Object.keys(this.state.content);
    var tempContent = this.state.content;
    for (var i = 0; i < contentKeys.length; i++){
      if(this.props.contentTopics.indexOf(contentKeys[i]) === -1){
        delete tempContent[contentKeys[i]];
        this.setState({content: tempContent});
        console.log(this.state.content);
      }
    }
  }

  addContent(data){
    var tempContent = this.state.content;
    tempContent[data.name] = data.projects;
    this.setState({content: tempContent});
    console.log(this.state.content);
  }

  render () {
    return (
      <div />
    );
  }
}