import React, {Component} from 'react';
import MathJax from 'react-mathjax';
const Markdown = require('react-markdown');
const RemarkMathPlugin = require('remark-math');

const math = props => <MathJax.Provider><MathJax.Node formula={props.value}></MathJax.Node></MathJax.Provider>
const inlineMath = props => <MathJax.Provider><MathJax.Node inline formula={props.value}></MathJax.Node></MathJax.Provider>

export default class Content extends Component {
  constructor(props){
    super(props);
    this.state = {contentList: {}, article: null};
    this.addContent = this.addContent.bind(this);
    this.addArticle = this.addArticle.bind(this);
    this.fetchArticle = this.fetchArticle.bind(this);
    this.fetchIntros = this.fetchIntros.bind(this);
    this.removeIntros = this.removeIntros.bind(this);
    this.onArticleClick = this.onArticleClick.bind(this);
    this.onArticleClose = this.onArticleClose.bind(this);
  }

  componentDidUpdate() {
    if (this.props.showContent) {
      var topicLength = this.props.contentTopics.length;
      if (topicLength > 0){
        if(topicLength > Object.keys(this.state.contentList).length) {
          this.fetchIntros(topicLength);
        }else if (topicLength < Object.keys(this.state.contentList).length) {
          this.removeIntros();
        }
        var firstElement = document.getElementById("content-list").children[0];
        if (firstElement != undefined){
          firstElement.scrollIntoView({ block: 'end',  behavior: 'smooth' });
        }

      }
    } else if(Object.keys(this.state.contentList).length > 0) {
      this.setState({contentList: {}});
    }
  }

  fetchIntros(topicLength) {
    for (var i = 0; i < topicLength; i++){
      if (!this.state.contentList.hasOwnProperty(this.props.contentTopics[i])){
        fetch('./project/snippets?type=' + this.props.contentTopics[i])
          .then(response => response.json())
          .then(data => this.addContent(data))
      }
    }
  }

  fetchArticle(articleName, topic) {
    articleName = articleName.split(" ").join("_");
    fetch('./project/content?topic=' + topic + "&project=" + articleName)
      .then(response => response.json())
      .then(data => this.addArticle(data, articleName))
  }

  removeIntros() {
    var contentKeys = Object.keys(this.state.contentList);
    var tempContent = this.state.contentList;
    for (var i = 0; i < contentKeys.length; i++){
      if(this.props.contentTopics.indexOf(contentKeys[i]) === -1){
        delete tempContent[contentKeys[i]];
        this.setState({contentList: tempContent});
      }
    }
  }

  addContent(data) {
    var tempContent = this.state.contentList;
    tempContent[data.name] = data.projects;
    this.setState({contentList: tempContent});
  }

  addArticle(data, article) {
    var tempContent = data[article];
    this.setState({article: tempContent});
  }

  onArticleClick(e) {
    var article = e.target.firstChild.data;
    var topic = e.currentTarget.firstChild.className.split(" ")[1];
    this.fetchArticle(article, topic);
  }

  onArticleClose() {
      this.setState({article: null});
  }

  render() {
    var contentKeys = Object.keys(this.state.contentList);
    var self = this;
    if(contentKeys.length == 0){
      return (
        <div id="content">
          <div id="content-list" className="hide"/>
        </div>
      );
    }else{
      if(this.state.article == null){
        return (
          <div id="content">
            <div id="content-list">
              <div id="content-list-item-clickable" onClick={this.onArticleClick}>
                { contentKeys.map(function(projectCategory){
                  return Object.keys(self.state.contentList[projectCategory]).map(function(project){
                    return <Markdown className={"content-list-item " + projectCategory} source={self.state.contentList[projectCategory][project]} plugins={[RemarkMathPlugin]} renderers={{inlineMath, math}} />;
                  })
                })}
              </div>
            </div>
            <div id="article" />
          </div>
        )
      }else{
        return (
          <div id="content">
            <div id="content-list" className="swipe">
              <div id="content-list-item-clickable" onClick={this.onArticleClick}>
                { contentKeys.map(function(projectCategory){
                  return Object.keys(self.state.contentList[projectCategory]).map(function(project){
                    return <Markdown className={"content-list-item " + projectCategory} source={self.state.contentList[projectCategory][project]} plugins={[RemarkMathPlugin]} renderers={{inlineMath, math}} />;
                  })
                })}
              </div>
            </div>
            <div id="article"  className="swipe">
              <img id="close" src="/static/images/close.png" onClick={this.onArticleClose}/>
                <Markdown className="article-content" source={this.state.article} plugins={[RemarkMathPlugin]} renderers={{inlineMath, math}} />
            </div>
          </div>
        )
      }
    }
  }
}