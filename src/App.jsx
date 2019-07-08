import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import Home from './Home';
import Gallery from './Gallery';
import Projects from './Projects';
import PageNotFound from './PageNotFound';


import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

//Components imports
import NavMenu from './components/nav';

class App extends Component {
  render() {
    return (
        <div className="App">
          <NavMenu />
          <MDBContainer>
            <MDBRow>
              <MDBCol />
              <MDBCol size="10">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/gallery/" component={Gallery} />
                <Route path="/projects/" component={Projects} />
                <Route component={PageNotFound} />
              </Switch>
              </MDBCol>
              <MDBCol />
            </MDBRow>
          </MDBContainer>
        </div>
    );
  }
}

export default App;
