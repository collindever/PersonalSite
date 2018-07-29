import React, {Component} from 'react';

export default class SolderIronOverlay extends Component {

  constructor(props) {
      super(props);
      this.state = {On: this.props.on, maxTempReached: false, maxTemp: 750, temp: 100};
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
    setTimeout(this.drawOff, 1000);
    setTimeout(this.increaseTemp, 1500);
  }

  increaseTemp() {
    this.drawOff();
    if(this.state.temp <= this.state.maxTemp && this.state.On){
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
    }else if (this.state.On) {
      this.state.temp = 100;
      this.drawOn();
    }else{
      this.state.temp = 250;
    }
  }

  render() {
   return (
       <canvas ref='solderIronOverlay' id='solderIronOverlay' onClick={this.onClick} height={175} width={200}/>
   );
  }
}
