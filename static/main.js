var cupCanvas = document.getElementById('coffee-cup');
var laptopCanvas = document.getElementById('laptop');
var papersCanvas = document.getElementById('papers');
var frameCanvas = document.getElementById('picture-frame');

var creamAngle = Math.PI / 180;
var creamRadius = 35;
var creamX = 100;
var creamY = 60;
var creamAcceleration = 1;
var accelerateCream = false;
var t = 0;
var cx = 70;
var cy = 60;


function init(){
  drawLaptop();
  window.requestAnimationFrame(drawCoffeeCup);
  drawPapers();
  drawPictureFrame();
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
    cup.arc(60,125,35,.8,3.5);
    cup.closePath();
    cup.fillStyle = '#c7cb74';
    cup.fill();

    //make the cup sides
    cup.fillStyle = '#c7cb74';
    cup.beginPath();
    cup.moveTo(20,80);
    cup.lineTo(110,90);
    cup.lineTo(84,150);
    cup.lineTo(25,120);
    cup.fill();

    // put the coffee in the cup
    cup.fillStyle = '#522f2e';
    cup.beginPath();
    cup.arc(70,60,50,0,2*Math.PI);
    cup.fill();

    // make the cup rim
    var radGrd = cup.createRadialGradient(70,60,50,70,60,45);
    radGrd.addColorStop(0,"#f5f5ad");
    radGrd.addColorStop(1,"white");
    cup.strokeStyle = radGrd;
    cup.lineWidth = 10;
    cup.stroke();

    //add the cream
    cup.fillStyle = '#f9face';
    cup.beginPath();
    cup.arc(creamX,creamY,5,0,2*Math.PI);
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

function drawLaptop(){
  if (laptopCanvas.getContext) {
    var laptop = laptopCanvas.getContext('2d');
    laptop.rotate(5*Math.PI/180);
    //make the bottom
    laptop.fillStyle = '#494941';
    laptop.beginPath();
    laptop.moveTo(40,250);
    laptop.lineTo(340,250);
    laptop.lineTo(340,390);
    laptop.arc(330,390,10,0,Math.PI/2)
    laptop.lineTo(50,400);
    laptop.arc(50,390,10,Math.PI/2, Math.PI)
    laptop.lineTo(40,250);
    laptop.fill();
    laptop.strokeStyle = '#88887d';
    laptop.lineWidth = 5;
    laptop.lineJoin = "round";
    laptop.stroke();

    //add mousepad
    laptop.fillStyle = '#88887d';
    laptop.beginPath();
    laptop.moveTo(155,395);
    laptop.lineTo(225,395);
    laptop.lineTo(225,350);
    laptop.lineTo(155,350);
    laptop.fill();

    //add keyboard
    laptop.fillStyle = '#88887d';
    laptop.beginPath();
    laptop.moveTo(45,345);
    laptop.lineTo(335,345);
    laptop.lineTo(335,275);
    laptop.lineTo(45,275);
    laptop.fill();

    //build screen
    laptop.fillStyle = '#494941';
    laptop.beginPath();
    laptop.moveTo(40,250);
    laptop.lineTo(340,250);
    laptop.arc(335,120,20,0,3*Math.PI/2,1);
    laptop.lineTo(340,100);
    laptop.lineTo(40,100);
    laptop.arc(45,120,20,3*Math.PI/2,Math.PI,1);
    laptop.lineTo(40,250);
    laptop.fill();
    laptop.strokeStyle = '#88887d';
    laptop.lineWidth = 5;
    laptop.lineJoin = "round";
    laptop.stroke();

    //add screen
    laptop.fillStyle = '#000000';
    laptop.beginPath();
    laptop.moveTo(50,235);
    laptop.lineTo(330,235);
    laptop.lineTo(345,115);
    laptop.lineTo(35,115);
    laptop.fill();
  }
}

function drawPapers(){
  if (papersCanvas.getContext) {
    var papers = papersCanvas.getContext('2d');
    papers.rotate(5*Math.PI/180);
    papers.globalCompositeOperation='source-over';

    //make the bottom paper
    papers.fillStyle = '#FFEEDD';
    papers.beginPath();
    papers.moveTo(40,40);
    papers.lineTo(150,40);
    papers.lineTo(150,190);
    papers.lineTo(40,190);
    papers.fill();

    papers.rotate(5*Math.PI/180);

    //make the middle paper
    papers.fillStyle = '#FFEEDD';
    papers.beginPath();
    papers.moveTo(58,38);
    papers.lineTo(163,38);
    papers.lineTo(163,188);
    papers.lineTo(58,188);
    papers.lineTo(58,38);
    papers.fill();
    papers.strokeStyle = '#000000';
    papers.lineWidth = 0.25;
    papers.stroke();

    papers.rotate(5*Math.PI/180);
    //make the top paper
    papers.fillStyle = '#FFEEDD';
    papers.beginPath();
    papers.moveTo(75,40);
    papers.lineTo(180,40);
    papers.lineTo(180,185);
    papers.lineTo(75,185);
    papers.lineTo(75,40);
    papers.fill();
    papers.strokeStyle = '#000000';
    papers.lineWidth = 0.25;
    papers.stroke();
  }
}

function drawPictureFrame(){
  if (frameCanvas.getContext) {
    var frame = frameCanvas.getContext('2d');

    // make the frame
    frame.fillStyle = '#5b422d';
    frame.beginPath();
    frame.moveTo(5,15);
    frame.lineTo(85,5);
    frame.lineTo(95,80);
    frame.lineTo(15,90);
    frame.lineTo(5,15);
    frame.fill();

    //make the matting
    frame.fillStyle = '#f9fad0';
    frame.beginPath();
    frame.moveTo(15,24);
    frame.lineTo(78,16);
    frame.lineTo(85,72);
    frame.lineTo(23,80);
    frame.lineTo(15,24);
    frame.fill();

    //make the picture
    frame.fillStyle = '#86ced4';
    frame.beginPath();
    frame.moveTo(17,26);
    frame.lineTo(76,18);
    frame.lineTo(83,70);
    frame.lineTo(25,78);
    frame.lineTo(17,26);
    frame.fill();

    // make the first mountain
    frame.fillStyle = '#ade4a2';
    frame.beginPath();
    frame.moveTo(83,70);
    frame.lineTo(83,55);
    frame.lineTo(65,35);
    frame.lineTo(50,75);
    frame.fill();

    // make the second mountain
    frame.fillStyle = '#77a26e';
    frame.beginPath();
    frame.moveTo(27,77);
    frame.lineTo(40,47);
    frame.lineTo(56,60);
    frame.lineTo(50,75);
    frame.fill();

    //make cloud
    frame.fillStyle = '#ffffff';
    frame.beginPath();
  }
}

init();