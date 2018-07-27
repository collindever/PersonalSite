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



// var cupCanvas = document.getElementById('coffee-cup');
//
// var creamAngle = Math.PI / 180;
// var creamRadius = 15;
// var creamX = 65;
// var creamY = 40;
// var creamAcceleration = 1;
// var accelerateCream = false;
// var t = 0;
// var cx = 47;
// var cy = 40;
//
//
// function init(){
//   window.requestAnimationFrame(drawCoffeeCup);
// }
//
// function drawCoffeeCup(){
//   if (cupCanvas.getContext) {
//     var cup = cupCanvas.getContext('2d');
//     cupCanvas.onclick = function(e) {
//       //stir the cream max speed coefficient
//       creamAcceleration = 20;
//       accelerateCream = true;
//     }
//
//     // make the bottom of the cup
//     cup.beginPath();
//     cup.arc(42.5,75,17,.8,3.2);
//     cup.closePath();
//     cup.fillStyle = '#e8e29f';
//     cup.fill();
//
//     //make the cup sides
//     cup.fillStyle = '#e8e29f';
//     cup.beginPath();
//     cup.moveTo(20,50);
//     cup.lineTo(68,65);
//     cup.lineTo(55,87);
//     cup.lineTo(25,75);
//     cup.fill();
//
//     // put the coffee in the cup
//     cup.fillStyle = '#522f2e';
//     cup.beginPath();
//     cup.arc(47,40,30,0,2*Math.PI);
//     cup.fill();
//
//     // make the cup rim
//     var radGrd = cup.createRadialGradient(47,40,30,47,40,2);
//     radGrd.addColorStop(0,"#fbffcd");
//     radGrd.addColorStop(1,"white");
//     cup.strokeStyle = radGrd;
//     cup.lineWidth = 5;
//     cup.stroke();
//
//     //add the cream
//     cup.fillStyle = '#fdffdd';
//     cup.beginPath();
//     cup.arc(creamX,creamY,3,0,2*Math.PI);
//     cup.fill();
//
//     window.requestAnimationFrame(drawCoffeeCup);
//     animateCoffeeCup()
//   }
// }
//
// function animateCoffeeCup(){
//   // if the cup has been clicked we stir the coffee
//   if(accelerateCream == true){
//     if(creamAcceleration > 1){
//       creamAcceleration -= 0.1;
//     }else {
//       accelerateCream = false;
//     }
//   }
//
//   // increase the angle of rotation
//   creamAngle += creamAcceleration * Math.PI / 300;
//
//   // calculate the new ball.x / ball.y
//   creamX = cx + creamRadius * Math.cos(creamAngle);
//   creamY = cy + creamRadius * Math.sin(creamAngle);
// }