import React from 'react';
import { MDBContainer, MDBRow } from "mdbreact";

import Cards from './components/cards';

class Home extends React.Component {
  render() {
    return (
        <MDBContainer fluid>
          <MDBRow>
              <Cards />
          </MDBRow> 
        </MDBContainer>
    );
  }
}

export default Home;
