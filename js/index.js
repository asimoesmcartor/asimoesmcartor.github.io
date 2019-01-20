// Vue.config.devtools = true;

// Vue.component('card', {
//   template:
//     '\n    <div class="card-wrap"\n      @mousemove="handleMouseMove"\n      @mouseenter="handleMouseEnter"\n      @mouseleave="handleMouseLeave"\n      ref="card">\n      <div class="card"\n        :style="cardStyle">\n        <div class="card-bg" :style="[cardBgTransform, cardBgImage]"></div>\n        <div class="card-info">\n          <slot name="header"></slot>\n          <slot name="content"></slot>\n        </div>\n      </div>\n    </div>',

//   mounted: function mounted() {
//     this.width = this.$refs.card.offsetWidth;
//     this.height = this.$refs.card.offsetHeight;
//   },
//   props: ['dataImage'],
//   data: function data() {
//     return {
//       width: 0,
//       height: 0,
//       mouseX: 0,
//       mouseY: 0,
//       mouseLeaveDelay: null
//     };
//   },

//   computed: {
//     mousePX: function mousePX() {
//       return this.mouseX / this.width;
//     },
//     mousePY: function mousePY() {
//       return this.mouseY / this.height;
//     },
//     cardStyle: function cardStyle() {
//       var rX = this.mousePX * 30;
//       var rY = this.mousePY * -30;
//       return {
//         transform: 'rotateY(' + rX + 'deg) rotateX(' + rY + 'deg)'
//       };
//     },
//     cardBgTransform: function cardBgTransform() {
//       var tX = this.mousePX * -40;
//       var tY = this.mousePY * -40;
//       return {
//         transform: 'translateX(' + tX + 'px) translateY(' + tY + 'px)'
//       };
//     },
//     cardBgImage: function cardBgImage() {
//       return {
//         backgroundImage: 'url(' + this.dataImage + ')'
//       };
//     }
//   },

//   methods: {
//     handleMouseMove: function handleMouseMove(e) {
//       this.mouseX = e.pageX - this.$refs.card.offsetLeft - this.width / 2;
//       this.mouseY = e.pageY - this.$refs.card.offsetTop - this.height / 2;
//     },
//     handleMouseEnter: function handleMouseEnter() {
//       clearTimeout(this.mouseLeaveDelay);
//     },
//     handleMouseLeave: function handleMouseLeave() {
//       var _this = this;
//       this.mouseLeaveDelay = setTimeout(function() {
//         _this.mouseX = 0;
//         _this.mouseY = 0;
//       }, 1000);
//     }
//   }
// });

// const NotFound = { template: '<p>Page not found</p>' };
// const Home = { template: '<p>home page</p>' };
// const About = { template: '<p>about page</p>' };

// const routes = {
//   '/': Home,
//   '/about': About
// };

// new Vue({
//   el: '#app',
//   data: {
//     seen: true
//   }
// });

function pastelColors() {
  var r = (Math.round(Math.random() * 127) + 127).toString(16);
  var g = (Math.round(Math.random() * 127) + 127).toString(16);
  var b = (Math.round(Math.random() * 127) + 127).toString(16);
  return '#' + r + g + b;
}

let rndPastelColor = pastelColors();

let generativeCircle = () => {
  var canvas = document.querySelector('canvas');
  var context = canvas.getContext('2d');

  var size = window.innerWidth;
  var dpr = window.devicePixelRatio;
  canvas.width = size * dpr;
  canvas.height = size * dpr;
  context.scale(dpr, dpr);
  context.lineWidth = 2;

  var step = 45;
  var lines = [];

  // Create the lines
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

  // Retiring this for now -- not using rndColor anywhere.
  // function makeRandomColor() {
  //   var color = '';
  //   while (color.length < 6) {
  //     color += Math.random()
  //       .toString(16)
  //       .substr(-6)
  //       .substr(-1);
  //   }
  //   return '#' + color;
  // }

  // // const rndColor = makeRandomColor();

  // Do the drawing
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

  var boxShadowColor = '0px 0px 400px -15px ' + rndPastelColor;
  document.getElementById('lines-circle').style.boxShadow = boxShadowColor;
};

let redrawCircle = () => {
  pastelColors();
  generativeCircle();
};

setInterval(generativeCircle, 100);
