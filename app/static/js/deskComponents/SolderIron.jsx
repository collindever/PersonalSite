import React, {Component} from 'react';

export default class SolderIron extends Component {
  constructor(props){
    super(props);
    this.state = {iron: null};
  }
  componentDidMount() {
        this.updateCanvas();
    }
    componentDidUpdate() {
        this.updateCanvas();
    }

    updateCanvas() {
      this.state.iron = this.refs.solderIron.getContext('2d');
      //make station
      this.state.iron.fillStyle = '#343fb4';
      this.state.iron.beginPath();
      this.state.iron.arc(160,35,20,2.4*Math.PI/2, 1.5*Math.PI);
      this.state.iron.lineTo(200,25);
      this.state.iron.arc(193,31,7,3*Math.PI/2,0);
      this.state.iron.lineTo(180,90);
      this.state.iron.lineTo(155,120);
      this.state.iron.lineTo(100,101);
      this.state.iron.arc(106,95,9,0,Math.PI);
      this.state.iron.lineTo(100,83);
      this.state.iron.lineTo(99,90);
      this.state.iron.lineTo(125,40);
      this.state.iron.lineTo(150,17);
      this.state.iron.fill();

      this.state.iron.beginPath();
      this.state.iron.arc(152,110,10,Math.PI,1.8*Math.PI,1);
      this.state.iron.fill();

      this.state.iron.beginPath();
      this.state.iron.arc(137,45,13,Math.PI*0.8,1.9*Math.PI);
      this.state.iron.fill();

      // add face plate
      this.state.iron.fillStyle = '#f3f84a';
      this.state.iron.beginPath();
      this.state.iron.arc(140,70,20,0,2*Math.PI);
      this.state.iron.fill();

      this.state.iron.moveTo(125,70);
      this.state.iron.beginPath();
      this.state.iron.lineTo(110,105);
      this.state.iron.lineTo(134,114);
      this.state.iron.lineTo(152,70);
      this.state.iron.lineTo(125,75);
      this.state.iron.fill();

      this.state.iron.fillStyle= '#333331';
      this.state.iron.beginPath();
      this.state.iron.arc(127.5,98,8,0,2*Math.PI);
      this.state.iron.fill();

      this.state.iron.fillStyle = '#d6d6c9';
      this.state.iron.beginPath();
      this.state.iron.arc(140,70,15,0,2*Math.PI);
      this.state.iron.fill();

      //add feet
      // back right
      this.state.iron.fillStyle = '#343f94';
      this.state.iron.beginPath();
      this.state.iron.arc(183,80,4,3*Math.PI/2,0);
      this.state.iron.lineTo(183,92);
      this.state.iron.lineTo(178,92);
      this.state.iron.lineTo(180,80);
      this.state.iron.fill();

      // front right
      this.state.iron.fillStyle = '#343fe4';
      this.state.iron.beginPath();
      this.state.iron.arc(153,104,8,0,Math.PI);
      this.state.iron.fill();

      this.state.iron.fillStyle = '#343fb4';
      this.state.iron.beginPath();
      this.state.iron.arc(153,102,7,0,Math.PI/0.80);
      this.state.iron.fill();

      //front left
      this.state.iron.fillStyle = '#343fe4';
      this.state.iron.beginPath();
      this.state.iron.arc(104,86,6,0.5,Math.PI/0.8);
      this.state.iron.fill();

      this.state.iron.fillStyle = '#343fB4';
      this.state.iron.beginPath();
      this.state.iron.arc(104,84,5,0.5,3*Math.PI/1.7);
      this.state.iron.fill();

      //add top highlight oval
      this.state.iron.fillStyle = '#343fff';
      this.state.iron.moveTo(155,20);
      this.state.iron.beginPath();
      this.state.iron.lineTo(190,29);
      this.state.iron.lineTo(170,45);
      this.state.iron.lineTo(135,35);
      this.state.iron.lineTo(155,20);
      this.state.iron.fill();

      //make base for iron
      this.state.iron.fillStyle = '#343fb4';
      this.state.iron.beginPath();
      this.state.iron.ellipse(45,50,15,30,0,0,2*Math.PI);
      this.state.iron.fill();

      this.state.iron.fillStyle = '#f3f84a';
      this.state.iron.beginPath();
      this.state.iron.ellipse(45,50,12,27,0,0,Math.PI);
      this.state.iron.fill();

      this.state.iron.fillStyle= '#333331';
      this.state.iron.beginPath();
      this.state.iron.arc(45,50,12,0,2*Math.PI);
      this.state.iron.fill();

      this.state.iron.strokeStyle = '#d6d6c9';
      this.state.iron.beginPath();
      this.state.iron.arc(45,50,8,0,2*Math.PI);
      this.state.iron.stroke();

      //make the cord
      this.state.iron.strokeStyle = '#333331';
      this.state.iron.lineWidth = 5;
      this.state.iron.beginPath();
      this.state.iron.arc(74,60,30,Math.PI,Math.PI/1.5,1);
      this.state.iron.stroke();

      this.state.iron.beginPath();
      this.state.iron.arc(47,113,30,3.25*Math.PI/2,0);
      this.state.iron.stroke();

      this.state.iron.beginPath();
      this.state.iron.arc(88.5,110,12,Math.PI,3*Math.PI/2,1);
      this.state.iron.stroke();

      this.state.iron.beginPath();
      this.state.iron.arc(89,128,30,3*Math.PI/2,0,1);
      this.state.iron.stroke();

      this.state.iron.beginPath();
      this.state.iron.arc(168.5,130,50,Math.PI,1.2*Math.PI);
      this.state.iron.stroke();

      this.state.iron.fillStyle = '#df0d0d';
      this.state.iron.font = '13px Courier bold';
      this.state.iron.rotate(.36);
      this.state.iron.fillText('750', 144, 21);
    }

    render() {
         return (
             <canvas ref='solderIron' id='solderIron' height={175} width={200}/>
         );
    }
}