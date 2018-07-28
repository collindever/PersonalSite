import React, {Component} from 'react';

export default class CoffeeCup extends Component {
  constructor(props) {
      super(props);
      this.state = {creamX: 65, creamY: 40, creamAngle: Math.PI / 180, creamAcceleration: 1, accelerateCream: false};
      this.updateCanvas = this.updateCanvas.bind(this);
      this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
      requestAnimationFrame(this.updateCanvas);
  }


  updateCanvas() {
      const cup = this.refs.coffeeCup.getContext('2d');

      // make the bottom of the cup
      cup.beginPath();
      cup.arc(42.5,75,17,.8,3.2);
      cup.closePath();
      cup.fillStyle = '#e8e29f';
      cup.fill();

      //make the cup sides
      cup.fillStyle = '#e8e29f';
      cup.beginPath();
      cup.moveTo(20,50);
      cup.lineTo(68,65);
      cup.lineTo(55,87);
      cup.lineTo(25,75);
      cup.fill();

      // put the coffee in the cup
      cup.fillStyle = '#522f2e';
      cup.beginPath();
      cup.arc(47,40,30,0,2*Math.PI);
      cup.fill();

      // make the cup rim
      var radGrd = cup.createRadialGradient(47,40,30,47,40,2);
      radGrd.addColorStop(0,"#fbffcd");
      radGrd.addColorStop(1,"white");
      cup.strokeStyle = radGrd;
      cup.lineWidth = 5;
      cup.stroke();

      //add the cream
      cup.fillStyle = '#fdffdd';
      cup.beginPath();
      cup.arc(this.state.creamX,this.state.creamY,3,0,2*Math.PI);
      cup.fill();

      //request animation frame
      requestAnimationFrame(this.updateCanvas);
      //move along the cream
      this.animateCream();

  }

  animateCream(){
    const creamRadius = 15;
    const cx = 47;
    const cy = 40;
    // if the cup has been clicked we stir the coffee
    if(this.state.accelerateCream == true){
      if(this.state.creamAcceleration > 1){
        this.state.creamAcceleration -= 0.1;
      }else {
        this.state.accelerateCream = false;
      }
    }

    // increase the angle of rotation
    this.state.creamAngle += this.state.creamAcceleration * Math.PI / 300;

    // calculate the new ball.x / ball.y
    this.state.creamX = cx + creamRadius * Math.cos(this.state.creamAngle);
    this.state.creamY = cy + creamRadius * Math.sin(this.state.creamAngle);
  }

  onClick() {
    this.state.creamAcceleration = 20;
    this.state.accelerateCream = true;
  }

  render() {
       return (
           <canvas ref='coffeeCup' id='coffeeCup' onClick={this.onClick} height={100} width={85} />
       );
  }
}