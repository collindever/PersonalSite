import React, {Component} from 'react';

export default class SolderIron extends Component {

  componentDidMount() {
    this.updateCanvas();
  }

  componentDidUpdate() {
    this.updateCanvas();
  }

  updateCanvas() {
    var iron = this.refs.solderIron.getContext('2d');
    //make station
    iron.fillStyle = '#343fb4';
    iron.beginPath();
    iron.arc(160,35,20,2.4*Math.PI/2, 1.5*Math.PI);
    iron.lineTo(200,25);
    iron.arc(193,31,7,3*Math.PI/2,0);
    iron.lineTo(180,90);
    iron.lineTo(155,120);
    iron.lineTo(100,101);
    iron.arc(106,95,9,0,Math.PI);
    iron.lineTo(100,83);
    iron.lineTo(99,90);
    iron.lineTo(125,40);
    iron.lineTo(150,17);
    iron.fill();

    iron.beginPath();
    iron.arc(152,110,10,Math.PI,1.8*Math.PI,1);
    iron.fill();

    iron.beginPath();
    iron.arc(137,45,13,Math.PI*0.8,1.9*Math.PI);
    iron.fill();

    // add face plate
    iron.fillStyle = '#f3f84a';
    iron.beginPath();
    iron.arc(140,70,20,0,2*Math.PI);
    iron.fill();

    iron.moveTo(125,70);
    iron.beginPath();
    iron.lineTo(110,105);
    iron.lineTo(134,114);
    iron.lineTo(152,70);
    iron.lineTo(125,75);
    iron.fill();

    iron.fillStyle= '#333331';
    iron.beginPath();
    iron.arc(127.5,98,8,0,2*Math.PI);
    iron.fill();

    iron.fillStyle = '#d6d6c9';
    iron.beginPath();
    iron.arc(140,70,15,0,2*Math.PI);
    iron.fill();

    //add feet
    // back right
    iron.fillStyle = '#343f94';
    iron.beginPath();
    iron.arc(183,80,4,3*Math.PI/2,0);
    iron.lineTo(183,92);
    iron.lineTo(178,92);
    iron.lineTo(180,80);
    iron.fill();

    // front right
    iron.fillStyle = '#343fe4';
    iron.beginPath();
    iron.arc(153,104,8,0,Math.PI);
    iron.fill();

    iron.fillStyle = '#343fb4';
    iron.beginPath();
    iron.arc(153,102,7,0,Math.PI/0.80);
    iron.fill();

    //front left
    iron.fillStyle = '#343fe4';
    iron.beginPath();
    iron.arc(104,86,6,0.5,Math.PI/0.8);
    iron.fill();

    iron.fillStyle = '#343fB4';
    iron.beginPath();
    iron.arc(104,84,5,0.5,3*Math.PI/1.7);
    iron.fill();

    //add top highlight oval
    iron.fillStyle = '#343fff';
    iron.moveTo(155,20);
    iron.beginPath();
    iron.lineTo(190,29);
    iron.lineTo(170,45);
    iron.lineTo(135,35);
    iron.lineTo(155,20);
    iron.fill();

    //make base for iron
    iron.fillStyle = '#343fb4';
    iron.beginPath();
    iron.ellipse(45,50,15,30,0,0,2*Math.PI);
    iron.fill();

    iron.fillStyle = '#f3f84a';
    iron.beginPath();
    iron.ellipse(45,50,12,27,0,0,Math.PI);
    iron.fill();

    iron.fillStyle= '#333331';
    iron.beginPath();
    iron.arc(45,50,12,0,2*Math.PI);
    iron.fill();

    iron.strokeStyle = '#d6d6c9';
    iron.beginPath();
    iron.arc(45,50,8,0,2*Math.PI);
    iron.stroke();

    //make the cord
    iron.strokeStyle = '#333331';
    iron.lineWidth = 5;
    iron.beginPath();
    iron.arc(74,60,30,Math.PI,Math.PI/1.5,1);
    iron.stroke();

    iron.beginPath();
    iron.arc(47,113,30,3.25*Math.PI/2,0);
    iron.stroke();

    iron.beginPath();
    iron.arc(88.5,110,12,Math.PI,3*Math.PI/2,1);
    iron.stroke();

    iron.beginPath();
    iron.arc(89,128,30,3*Math.PI/2,0,1);
    iron.stroke();

    iron.beginPath();
    iron.arc(168.5,130,50,Math.PI,1.2*Math.PI);
    iron.stroke();
  }

  render() {
   return (
       <canvas ref='solderIron' id='solderIron' height={175} width={200}/>
   );
  }
}