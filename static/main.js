var cupCanvas = document.getElementById('coffee-cup');
var creamAngle = Math.PI / 180;
var creamRadius = 55;
var creamX = 180;
var creamY = 120;
var creamAcceleration = 1;
var accelerateCream = false;
var t = 0;
var cx = 125;
var cy = 120;


function init(){
  window.requestAnimationFrame(drawCoffeeCup);
}

function drawCoffeeCup(){
  if (cupCanvas.getContext) {
    var cup = cupCanvas.getContext('2d');
    cupCanvas.onclick = function(e) {
      //stir the cream max speed coefficient
      creamAcceleration = 20;
      accelerateCream = true;
    }

    // make the bottom of the cup
    cup.beginPath();
    cup.arc(100,225,70,.8,3.5);
    cup.closePath();
    cup.fillStyle = '#c7cb74';
    cup.fill();

    //make the cup sides
    cup.fillStyle = '#c7cb74';
    cup.beginPath();
    cup.moveTo(25,155);
    cup.lineTo(205,190);
    cup.lineTo(145,280);
    cup.lineTo(30,220);
    cup.fill();

    // put the coffee in the cup
    cup.fillStyle = '#522f2e';
    cup.beginPath();
    cup.arc(125,120,100,0,2*Math.PI);
    cup.fill();

    // make the cup rim
    var radGrd = cup.createRadialGradient(125,120,100,125,120,90);
    radGrd.addColorStop(0,"#f5f5ad");
    radGrd.addColorStop(1,"white");
    cup.strokeStyle = radGrd;
    cup.lineWidth = 20;
    cup.stroke();

    //add the cream
    cup.fillStyle = '#f9face';
    cup.beginPath();
    cup.arc(creamX,creamY,10,0,2*Math.PI);
    cup.fill();

    window.requestAnimationFrame(drawCoffeeCup);
    animateCoffeeCup()
  }
}

function animateCoffeeCup(){
  // if the cup has been clicked we stir the coffee
  if(accelerateCream == true){
    if(creamAcceleration > 1){
      creamAcceleration -= 0.1;
    }else {
      accelerateCream = false;
    }
  }

  // increase the angle of rotation
  creamAngle += creamAcceleration * Math.PI / 300;

  // calculate the new ball.x / ball.y
  creamX = cx + creamRadius * Math.cos(creamAngle);
  creamY = cy + creamRadius * Math.sin(creamAngle);
}

init();