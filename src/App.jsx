import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import Home from './Home';
import Gallery from './Gallery';
import Projects from './Projects';
import baffle from 'baffle';

import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

//Components imports
import NavMenu from './components/nav';

function demoAsyncCall() {
  return new Promise((resolve) => setTimeout(() => resolve(), 2500));
}



class App extends Component {
  state = {
    loading: true
  };

  componentDidMount() {
    // this simulates an async action, after which the component will render the content
    demoAsyncCall().then(() => this.setState({ loading: false }));
    let b = baffle('.loading');
    b.set({
      speed: 300,
      characters: 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz~!@#$%^&*()-+=[]{}|;:,./<>?',
    });
    b.reveal(2500)
  }

  render() {

    const { loading } = this.state;
    
    if(loading) {

      return (

          <MDBContainer className="loading-container">
            <MDBRow className="pt-3 pb-3">
              <MDBCol></MDBCol>
              <MDBCol>
                <h3 className="loading text-center">Loading...</h3>
              </MDBCol>
              <MDBCol></MDBCol>
            </MDBRow>
          </MDBContainer>
      );
    }

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
                <Route component={<div>404 pages not found</div>} />
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
