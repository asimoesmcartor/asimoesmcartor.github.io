import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Post from './Post';
import { Container, Row, Col } from 'react-bootstrap';

//Components imports
// import NavMenu from './components/nav';
// import Cards from './components/cards';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          {/* <NavMenu /> */}

          <Container>
            <Row>
              <Col />
              <Col xs={6}>
                {/* <Cards /> */}
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/post/" component={Post} />
                </Switch>
              </Col>
              <Col />
            </Row>
          </Container>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
