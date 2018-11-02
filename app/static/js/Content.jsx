import React, {Component} from 'react';
import MathJax from 'react-mathjax';
const Markdown = require('react-markdown');
const RemarkMathPlugin = require('remark-math');

const math = props => <MathJax.Provider><MathJax.Node formula={props.value}></MathJax.Node></MathJax.Provider>
const inlineMath = props => <MathJax.Provider><MathJax.Node inline formula={props.value}></MathJax.Node></MathJax.Provider>

export default class Content extends Component {
  constructor(props){
    super(props);
    this.state = {content: {}};
    this.addContent = this.addContent.bind(this);
    this.prepareContent = this.prepareContent.bind(this);
    this.fetchIntros = this.fetchIntros.bind(this);
    this.removeIntros = this.removeIntros.bind(this);
    this.onClick = this.onClick.bind(this);
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
        var firstElement = document.getElementById("content-list").children[0];
        if (firstElement != undefined){
          firstElement.scrollIntoView({ block: 'end',  behavior: 'smooth' });
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
      }
    }
  }

  addContent(data) {
    var tempContent = this.state.content;
    tempContent[data.name] = data.projects;
    this.setState({content: tempContent});
  }

  prepareContent() {
    var markdownContent = [];
    for (const [key,value] of Object.entries(this.state.content)) {
      for (const [key,value] of Object.entries(value)) {
        markdownContent.push(value);
      }
    }
    return markdownContent
  }

  onClick(e) {
    var article = e.target.firstChild.data;
    console.log(article);
  }

  render() {
    var contentKeys = Object.keys(this.state.content);
    if(contentKeys.length == 0){
      return (
        <div id="content-list" className="hide"/>
      );
    }else{
      var content = this.prepareContent();
      return (
        <div id="content-list">
          <div id="content-list-item-clickable" onClick={this.onClick}>
            {content.map(function(project){
              return <Markdown className="content-list-item" source={project} plugins={[RemarkMathPlugin]} renderers={{inlineMath, math}} />;
            })}
          </div>
        </div>
      )
    }
  }
}