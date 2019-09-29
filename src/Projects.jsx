import React from 'react';

//p5 Generative Imports
// import P5Wrapper from 'react-p5-wrapper';
// import StarApp from './components/starapp';

import { MDBContainer } from "mdbreact";
import CanvasLines from './components/canvas_lines';

class Projects extends React.Component {
  render() {
    return (
      <MDBContainer fluid>
          {/* <P5Wrapper sketch={StarApp} /> */}
          {/* <P5Wrapper sketch={GenerativeLinesApp} /> */}
          <h1 className="h1-responsive" >Generative Lines</h1>
          <CanvasLines />
      </MDBContainer>
    );
  }
}

export default Projects;
