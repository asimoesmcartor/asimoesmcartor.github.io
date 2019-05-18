import React from 'react';
import {  MDBRow, MDBCol, MDBCardBody, MDBIcon, MDBBtn, MDBView, MDBMask } from "mdbreact";

// import gallery4 from "../images/gallery-4.jpg";
// import gallery8 from "../images/gallery-8.jpg";
// import gallery9 from "../images/gallery-9.jpg";



const Cards = () => (
  <section className="text-center my-5">
  <h2 className="h1-responsive font-weight-bold my-5">
    Things I am working on
  </h2>
  <p className="grey-text w-responsive mx-auto mb-5">
    I built this website using React components to become more familiar with 
    breaking out my projects into components. The Gallery section holds my photos that 
    I have taken around the world. The Projects section holds my web projects that I 
    have been working on over the past few years.
  </p>
  

  <MDBRow className="text-center">
    <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
      <MDBView className="overlay rounded z-depth-1" waves>
        <img
          src={process.env.PUBLIC_URL + '/images/gallery-9.jpg'}
          alt=""
          className="img-fluid"
        />
        <a href="/gallery">
          <MDBMask overlay="white-slight" />
        </a>
      </MDBView>
      <MDBCardBody className="pb-0">
        <h4 className="font-weight-bold my-3">Photography</h4>
        <p className="grey-text">
          Examples of a few photos I have taken around the world.
        </p>
        <MDBBtn gradient="blue" size="sm">
          <MDBIcon far icon="camera-retro" className="left white-text" /> Gallery
        </MDBBtn>
      </MDBCardBody>
    </MDBCol>
    <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
      <MDBView className="overlay rounded z-depth-1" waves>
        <img
          src={process.env.PUBLIC_URL + '/images/gallery-8.jpg'}
          alt=""
          className="img-fluid"
        />
        <a href="/projects">
          <MDBMask overlay="white-slight" />
        </a>
      </MDBView>
      <MDBCardBody className="pb-0">
        <h4 className="font-weight-bold my-3">Generative Lines</h4>
        <p className="grey-text">
          This project I ported a JavaScript based random generated squiggly lines 
          based off of the learnings from p5.
        </p>
        <MDBBtn gradient="blue" size="sm">
          <MDBIcon far icon="pencil-alt" className="left white-text" /> Generative Lines
        </MDBBtn>
      </MDBCardBody>
    </MDBCol>
  </MDBRow>
</section>
);

export default Cards;
