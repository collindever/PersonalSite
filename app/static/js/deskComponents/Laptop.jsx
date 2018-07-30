import React, {Component} from 'react';

export default class Laptop extends Component {
  componentDidMount() {
        const laptop = this.refs.laptop.getContext('2d');
        laptop.rotate(5*Math.PI/180);
        this.updateCanvas();
    }
    componentDidUpdate() {
        this.updateCanvas();
    }

    updateCanvas() {
        const laptop = this.refs.laptop.getContext('2d');
        //make the bottom
        laptop.fillStyle = '#494941';
        laptop.beginPath();
        laptop.moveTo(40,160);
        laptop.lineTo(340,160);
        laptop.lineTo(340,300);
        laptop.arc(330,300,10,0,Math.PI/2);
        laptop.lineTo(50,310);
        laptop.arc(50,300,10,Math.PI/2, Math.PI);
        laptop.lineTo(40,160);
        laptop.fill();
        laptop.strokeStyle = '#9c9c9c';
        laptop.lineWidth = 5;
        laptop.lineJoin = "round";
        laptop.stroke();

        //add mousepad
        laptop.fillStyle = '#9c9c9c';
        laptop.beginPath();
        laptop.moveTo(155,305);
        laptop.lineTo(225,305);
        laptop.lineTo(225,260);
        laptop.lineTo(155,260);
        laptop.fill();

        //add keyboard
        laptop.fillStyle = '#9c9c9c';
        laptop.beginPath();
        laptop.moveTo(45,255);
        laptop.lineTo(335,255);
        laptop.lineTo(335,185);
        laptop.lineTo(45,185);
        laptop.fill();

        //build screen
        laptop.fillStyle = '#494941';
        laptop.beginPath();
        laptop.moveTo(40,160);
        laptop.lineTo(340,160);
        laptop.arc(335,30,20,0,3*Math.PI/2,1);
        laptop.lineTo(340,10);
        laptop.lineTo(40,10);
        laptop.arc(45,30,20,3*Math.PI/2,Math.PI,1);
        laptop.lineTo(40,160);
        laptop.fill();
        laptop.strokeStyle = '#9c9c9c';
        laptop.lineWidth = 5;
        laptop.lineJoin = "round";
        laptop.stroke();

        //add screen
        laptop.fillStyle = '#000000';
        laptop.beginPath();
        laptop.moveTo(50,145);
        laptop.lineTo(330,145);
        laptop.lineTo(345,25);
        laptop.lineTo(35,25);
        laptop.fill();
    }
    render() {
         return (
             <canvas ref='laptop' id='laptop' height={350} width={375} />
         );
    }
}