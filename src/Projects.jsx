import React from 'react';

//p5 Generative Imports
// import P5Wrapper from 'react-p5-wrapper';
// import StarApp from './components/starapp';
import CanvasLines from './components/canvas_lines';


class Projects extends React.Component {
  render() {
    return (
      <div>
        {/* <P5Wrapper sketch={StarApp} /> */}
        {/* <P5Wrapper sketch={GenerativeLinesApp} /> */}
        <h1>Generative Lines</h1>
        <CanvasLines />
      </div>
    );
  }
}

export default Projects;
