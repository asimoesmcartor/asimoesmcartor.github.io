import React from 'react';
import { MDBContainer, MDBRow } from "mdbreact";

import { LazyLoadComponent } from 'react-lazy-load-image-component';

import Cards from './components/cards';

class Home extends React.Component {
  render() {
    return (
        <MDBContainer fluid>
          <MDBRow>
          <LazyLoadComponent>
              <Cards />
          </LazyLoadComponent>
          </MDBRow> 
        </MDBContainer>
    );
  }
}

export default Home;
