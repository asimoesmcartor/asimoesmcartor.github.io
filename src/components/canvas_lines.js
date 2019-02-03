import React from 'react';
// import { Button } from 'react-bootstrap';

class CanvasLines extends React.Component {
  componentDidMount() {
    //             ╔═╗╔═╗╔╗╔╔═╗╦═╗╔═╗╔╦╗╦╦  ╦╔═╗  ╦  ╦╔╗╔╔═╗╔═╗
    //             ║ ╦║╣ ║║║║╣ ╠╦╝╠═╣ ║ ║╚╗╔╝║╣   ║  ║║║║║╣ ╚═╗
    //             ╚═╝╚═╝╝╚╝╚═╝╩╚═╩ ╩ ╩ ╩ ╚╝ ╚═╝  ╩═╝╩╝╚╝╚═╝╚═╝

    // Creates pastel RGB color
    const pastelColors = () => {
      let r = (Math.round(Math.random() * 127) + 127).toString(16);
      let g = (Math.round(Math.random() * 127) + 127).toString(16);
      let b = (Math.round(Math.random() * 127) + 127).toString(16);
      return '#' + r + g + b;
    };

    let rndPastelColor = pastelColors();

    // Creates the Generative Circle with randomized lines

    const generativeCircle = () => {
      var canvas = document.querySelector('canvas');
      var context = canvas.getContext('2d');

      const scalingFactor = 6;

      var size = window.innerWidth;
      var dpr = window.devicePixelRatio / scalingFactor;
      canvas.width = size * dpr;
      canvas.height = size * dpr;
      context.scale(dpr, dpr);
      context.lineWidth = 2;

      var step = 45;
      var lines = [];

      for (var i = step; i <= size - step; i += step) {
        var line = [];
        for (var j = step; j <= size - step; j += step) {
          var distanceToCenter = Math.abs(j - size / 2);
          var variance = Math.max(size / 2 - 50 - distanceToCenter, 0);
          var random = ((Math.random() * variance) / 2) * -1;
          var point = { x: j, y: i + random };
          line.push(point);
        }
        lines.push(line);
      }

      for (var i = 0; i < lines.length; i++) {
        context.beginPath();
        context.moveTo(lines[i][0].x, lines[i][0].y);

        for (var j = 0; j < lines[i].length - 2; j++) {
          var xc = (lines[i][j].x + lines[i][j + 1].x) / 2;
          var yc = (lines[i][j].y + lines[i][j + 1].y) / 2;
          context.quadraticCurveTo(lines[i][j].x, lines[i][j].y, xc, yc);
        }

        context.quadraticCurveTo(
          lines[i][j].x,
          lines[i][j].y,
          lines[i][j + 1].x,
          lines[i][j + 1].y
        );
        context.save();
        context.globalCompositeOperation = 'destination-out';
        context.fill();
        context.restore();
        context.strokeStyle = rndPastelColor;
        context.stroke();
      }

      // Adds shadow behind the circle that matches line color
      var boxShadowColor = '0px 0px 400px -15px ' + rndPastelColor;
      document.getElementById('circle-crop').style.boxShadow = boxShadowColor;
    };
    setInterval(generativeCircle, 100);
  }

  render() {
    return (
      <div>
        <div id="border">
          <div id="frame">
            <div id="circle-crop">
              <canvas id="lines-circle" ref="canvas" width={640} height={425} />
            </div>
          </div>
        </div>
        <h3>Generative Lines</h3>
        {/* <Button onClick={this.newColor}>New Color</Button> */}
      </div>
    );
  }
}
export default CanvasLines;
