import React, {Component} from 'react';

export default class ProjectNav extends Component {

  constructor(props){
    super(props);
    this.state = {Name: this.props.name, projects: []};
    this.onClick = this.onClick.bind(this);
  }

  componentDidUpdate() {
    if(this.props.on && this.state.projects.length == 0){
      fetch('./project/names?type=' + this.state.Name)
        .then(response => response.json())
        .then(data => this.setState({projects: data}));

    }
  }

  onClick(){this.props.onClickChange();}

  ShowProjects(){
    if(this.props.on && this.state.projects.length > 0){
      return (
        <div id= {this.state.Name + '-projects-list'} className="project-list">
          {this.state.projects.map(function(project){
            return <h3 key={project} className="project-list-item">{project}</h3>;
          })}
        </div>
      )
    }else if (this.state.projects.length > 0) {
      return (
        <div id= {this.state.Name + '-projects-list'} className="project-list hide">
          {this.state.projects.map(function(project){
            return <h3 key={project} className="project-list-item hide">{project}</h3>;
          })}
        </div>
      )
    }else{
      return (
        <div id= {this.state.Name + '-projects-list'} className="project-list hide initial"></div>
      )
    }
  }

  render() {
    return (
      <div id={this.state.Name + '-nav'} className="clickable-nav-element">
        <h2 onClick={this.onClick}>{this.state.Name}</h2>
        {this.ShowProjects()}
      </div>
    );
  }
}