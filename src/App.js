import React, { Component } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './Home';
import Gallery from './Gallery';
import Projects from './Projects';

import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

import { createBrowserHistory } from 'history';

//Components imports
import NavMenu from './components/nav';

const customHistory = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavMenu />
          <MDBContainer>
            <MDBRow>
              <MDBCol />
              <MDBCol size="10">
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/gallery/" component={Gallery} />
                  <Route path="/projects/" component={Projects} />
                </Switch>
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
