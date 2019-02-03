import React from 'react';

//p5 Generative Imports
import P5Wrapper from 'react-p5-wrapper';
// import StarApp from './components/starapp';
import GenerativeLinesApp from './components/P5WrapperLines/sketch';

class Home extends React.Component {
  render() {
    return (
      <div>
        {/* <P5Wrapper sketch={StarApp} /> */}
        <P5Wrapper sketch={GenerativeLinesApp} />

        <p>Home</p>
        <p>This is the Home page</p>
      </div>
    );
  }
}

export default Home;
