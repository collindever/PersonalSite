import React, {Component} from 'react';

export default class PictureFrame extends Component {
  componentDidMount() {
    this.updateCanvas();
  }

  componentDidUpdate() {
    this.updateCanvas();
  }

  updateCanvas() {
    const frame = this.refs.pictureFrame.getContext('2d');

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

  render() {
     return (
       <canvas ref="pictureFrame" id="pictureFrame" height={100} width={100}/>
     );
  }
}