import React, {Component} from 'react';

export default class Papers extends Component {
  componentDidMount() {
    this.updateCanvas();
  }

  // componentDidUpdate() {
  //   this.updateCanvas();
  // }

  updateCanvas() {
    const papers = this.refs.papers.getContext('2d');
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
    papers.lineWidth = 0.45;
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
    papers.lineWidth = 0.45;
    papers.stroke();
  }

  render() {
   return (
     <canvas ref="papers" id="papers" height={250} width={200} />
   );
  }
}