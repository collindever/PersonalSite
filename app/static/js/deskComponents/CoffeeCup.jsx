import React, {Component} from 'react';

export default class CoffeeCup extends Component {
  componentDidMount() {
        this.updateCanvas();
    }
    componentDidUpdate() {
        this.updateCanvas();
    }

    updateCanvas() {
        const creamX = 65;
        const creamY = 40;
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
        cup.arc(creamX,creamY,3,0,2*Math.PI);
        cup.fill();
    }

    render() {
         return (
             <canvas ref='coffeeCup' id='coffeeCup' height={100} width={85} />
         );
    }
}