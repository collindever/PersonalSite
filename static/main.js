var cupCanvas = document.getElementById('coffee-cup');
var laptopCanvas = document.getElementById('laptop');
var papersCanvas = document.getElementById('papers');
var frameCanvas = document.getElementById('picture-frame');
var solderCanvas = document.getElementById('solder-iron');

var creamAngle = Math.PI / 180;
var creamRadius = 15;
var creamX = 65;
var creamY = 40;
var creamAcceleration = 1;
var accelerateCream = false;
var t = 0;
var cx = 47;
var cy = 40;


function init(){
  drawLaptop();
  window.requestAnimationFrame(drawCoffeeCup);
  drawPapers();
  drawPictureFrame();
  drawSolderIron();

  var desk = document.getElementById('desk');
  var deskHeight = desk.outerHeight();
  var deskWidth = desk.outerWidth();
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
    cup.arc(42.5,75,17,.8,3.2);
    cup.closePath();
    cup.fillStyle = '#e3e89f';
    cup.fill();

    //make the cup sides
    cup.fillStyle = '#e3e89f';
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
    radGrd.addColorStop(0,"#f5fabb");
    radGrd.addColorStop(1,"white");
    cup.strokeStyle = radGrd;
    cup.lineWidth = 5;
    cup.stroke();

    //add the cream
    cup.fillStyle = '#fdffdd';
    cup.beginPath();
    cup.arc(creamX,creamY,3,0,2*Math.PI);
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
    laptop.moveTo(40,160);
    laptop.lineTo(340,160);
    laptop.lineTo(340,300);
    laptop.arc(330,300,10,0,Math.PI/2);
    laptop.lineTo(50,310);
    laptop.arc(50,300,10,Math.PI/2, Math.PI);
    laptop.lineTo(40,160);
    laptop.fill();
    laptop.strokeStyle = '#88887d';
    laptop.lineWidth = 5;
    laptop.lineJoin = "round";
    laptop.stroke();

    //add mousepad
    laptop.fillStyle = '#88887d';
    laptop.beginPath();
    laptop.moveTo(155,305);
    laptop.lineTo(225,305);
    laptop.lineTo(225,260);
    laptop.lineTo(155,260);
    laptop.fill();

    //add keyboard
    laptop.fillStyle = '#88887d';
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
    laptop.strokeStyle = '#88887d';
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

function drawSolderIron(){
  if (solderCanvas.getContext) {
    var iron = solderCanvas.getContext('2d');

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
}

init();