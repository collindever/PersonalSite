import React, {Component} from 'react';

export default class HardwareNav extends Component {

  constructor(props){
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(){
    console.log("click Registered");
    this.props.onClickChange();
  }

  render() {
    return (<h2 onClick={this.onClick}>Hardware</h2>);
  }
}