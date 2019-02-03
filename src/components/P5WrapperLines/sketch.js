export default function sketch(p) {
  //   let rotation = 0;

  //   const height = 400;
  //   const width = 600;

  p.setup = function() {
    const size = window.innerWidth;
    const dpr = window.devicePixelRatio;
    p.width = size * dpr;
    p.height = size * dpr;
    const canvasHeight = p.height / 5;
    const canvasWidth = p.width / 5;
    p.createCanvas(canvasWidth, canvasHeight, p.WEBGL);
    p.frameRate(60);
    // p.position(0, 0);
  };

  //   p.myCustomRedrawAccordingToNewPropsHandler = function(props) {
  //     if (props.rotation) {
  //       rotation = (props.rotation * Math.PI) / 180;
  //     }
  //   };

  const pastelColors = () => {
    let r = (Math.round(Math.random() * 127) + 127).toString(16);
    let g = (Math.round(Math.random() * 127) + 127).toString(16);
    let b = (Math.round(Math.random() * 127) + 127).toString(16);
    return '#' + r + g + b;
  };

  let rndPastelColor = pastelColors();

  let size = 200;
  let step = 10;
  let lines = [];

  for (var i = step; i <= size - step; i += step) {
    let line = [];
    for (var j = step; j <= size - step; j += step) {
      var distanceToCenter = Math.abs(j - size / 2);
      var variance = Math.max(size / 2 - 50 - distanceToCenter, 0);
      var random = ((Math.random() * variance) / 2) * -1;
      let point = { x: j, y: i + random };
      line.push(point);
    }
    lines.push(line);
  }

  p.draw = function() {
    for (var i = 0; i < lines.length; i++) {
      for (var j = 0; j < lines[i].length - 2; j++) {
        // var xc = (lines[i][j].x + lines[i][j + 1].x) / 2;
        // var yc = (lines[i][j].y + lines[i][j + 1].y) / 2;
        p.beginShape();
        p.vertex(lines[i][j].x, lines[i][j].y);
        p.vertex(lines[i][j + 1].x, lines[i][j + 1].y);
        p.endShape();
      }
      p.stroke(rndPastelColor);
    }
  };
  //   p.save();
  //   p.globalCompositeOperation = 'destination-out';
  //   p.fill();
  //   p.restore();
}
