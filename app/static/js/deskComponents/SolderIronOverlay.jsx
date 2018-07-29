import React, {Component} from 'react';

// function sleep(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

export default class SolderIronOverlay extends Component {

  constructor(props) {
      super(props);
      this.state = {On: false, maxTempReached: false, maxTemp: 750, temp: 100};
      // this.updateCanvas = this.updateCanvas.bind(this);
      this.drawOn = this.drawOn.bind(this);
      this.drawOff = this.drawOff.bind(this);
      this.animateOn = this.animateOn.bind(this);
      this.increaseTemp = this.increaseTemp.bind(this);
      this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    this.rotateCanvas();
  }

  componentDidUpdate() {
    if(this.state.On){
      this.darwOn();
    }else {
      this.drawOff()
    }
  }

  onClick() {
    this.state.On = this.state.On ? false : true;
    console.log("Click registered " + this.state.On);
    if(this.state.On){
      this.animateOn();
    }else {
      this.drawOff();
    }
  }

  rotateCanvas() {
    var iron = this.refs.solderIronOverlay.getContext('2d');
    iron.rotate(.36);
  }

  drawOn() {
    var iron = this.refs.solderIronOverlay.getContext('2d');

    iron.filter = 'blur(0px)';
    iron.fillStyle = '#df0d0d';
    iron.font = '13px Courier New';
    iron.fillText(this.state.maxTemp, 144, 21);

    iron.filter = 'blur(3px)';
    iron.fillStyle = '#df0d0d';
    iron.font = '12px Courier New';
    iron.fillText(this.state.maxTemp, 144, 21);

    iron.filter = 'blur(3px)';
    iron.fillStyle = '#df0d0d';
    iron.font = '15px Courier New';
    iron.fillText(this.state.maxTemp, 144, 21);
  }

  drawOff() {
    var iron = this.refs.solderIronOverlay.getContext('2d');
    iron.clearRect(0,0,200,175);
  }

  animateOn() {
    requestAnimationFrame(this.drawOn);
    console.log("Animation first step");
    setTimeout(this.drawOff, 1000);
    console.log("Animation second step");
    setTimeout(this.increaseTemp, 1500);
    console.log("Animation third step");
  }

  increaseTemp() {
    this.drawOff();
    if(this.state.temp <= this.state.maxTemp ){
      var iron = this.refs.solderIronOverlay.getContext('2d');

      iron.filter = 'blur(0px)';
      iron.fillStyle = '#df0d0d';
      iron.font = '13px Courier New';
      iron.fillText(this.state.temp, 144, 21);

      iron.filter = 'blur(3px)';
      iron.fillStyle = '#df0d0d';
      iron.font = '12px Courier New';
      iron.fillText(this.state.temp, 144, 21);

      iron.filter = 'blur(3px)';
      iron.fillStyle = '#df0d0d';
      iron.font = '15px Courier New';
      iron.fillText(this.state.temp, 144, 21);

      this.state.temp += 3;
      requestAnimationFrame(this.increaseTemp);
    }else{
      this.state.temp = 100;
      this.drawOn();
    }

  }

  render() {
   return (
       <canvas ref='solderIronOverlay' id='solderIronOverlay' onClick={this.onClick} height={175} width={200}/>
   );
  }
}
