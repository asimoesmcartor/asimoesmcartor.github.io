import React from 'react';
import { MDBContainer, MDBCol, MDBRow } from "mdbreact";

// import Cards from './components/cards';
import NavMenu from './components/nav';


class Home extends React.Component {

  render() {
    return (
        <MDBContainer fluid>
          <MDBRow>
              {/* <Cards /> */}
                <MDBCol lg="12" md="12" className="mb-lg-0 mb-6">
                    <div className="my-5">
                      <center>
                        <div className="profile-box">
                          <div className="profile-container">
                            <div className="profile-image">
                              <div className="profile">
                              </div>
                            </div>
                          </div>
                        </div>
                      </center>
                    </div>
                
                    <h2 className="force-center h1-responsive font-weight-bold">
                      Things I am working on
                    </h2>
                    <p className="grey-text text-left w-responsive mx-auto mb-5">
                      I built this website using React components to become more familiar with 
                      breaking out my projects into smaller bits that I can easily swap in and out. 
                      The Gallery section holds my photos that I have taken around the world.
                      The Projects section holds my web projects that I have been working on over the 
                      past few years. Explore and enjoy. <i class="fas fa-user-astronaut white-text"></i>
                    </p>

                </MDBCol>
          </MDBRow> 
        </MDBContainer>
    );
  }
}

export default Home;
