import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Home from './Home';
import Gallery from './Gallery';
import Projects from './Projects';

import { MDBContainer, MDBRow, MDBCol } from "mdbreact";


//Components imports
import NavMenu from './components/nav';

class App extends Component {
  render() {
    return (
     <BrowserRouter basename="/">
        <div className="App">
          <NavMenu />
          <MDBContainer>
            <MDBRow>
              <MDBCol />
              <MDBCol size="10">
                  <Route exact path="/" component={Home} />
                  <Route path="/gallery/" component={Gallery} />
                  <Route path="/projects/" component={Projects} />
              </MDBCol>
              <MDBCol />
            </MDBRow>
          </MDBContainer>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
