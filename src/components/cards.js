import React from 'react';
import {  MDBRow, MDBCol, MDBCardBody, MDBIcon, MDBBtn, MDBView, MDBMask } from "mdbreact";

//Loads components later to give time for images to come in.
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';



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
    <MDBCol lg="6" md="12" className="mb-lg-0 mb-6">
      <MDBView className="overlay rounded z-depth-1" waves>
        <LazyLoadImage
          placeholderSrc={process.env.PUBLIC_URL + '/images/preload-images/gallery-9.jpg'}
          src={process.env.PUBLIC_URL + '/images/gallery-9.jpg'}
          alt=""
          effect="opacity"
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
        <MDBBtn gradient="blue" size="sm" className="white-text">
          <MDBIcon fas icon="camera-retro" className="left" /> Gallery
        </MDBBtn>
      </MDBCardBody>
    </MDBCol>
    <MDBCol lg="6" md="12" className="mb-lg-0 mb-6">
      <MDBView className="overlay rounded z-depth-1" waves>
        <LazyLoadImage
          placeholderSrc={process.env.PUBLIC_URL + '/images/preload-images/gallery-8.jpg'}
          src={process.env.PUBLIC_URL + '/images/gallery-8.jpg'}
          alt=""
          effect="opacity"
          wrapperclassName="lazy-load-image-loaded-display"
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
        <MDBBtn gradient="blue" size="sm" className="white-text">
          <MDBIcon fas icon="pencil-alt" className="left" /> Generative Lines
        </MDBBtn>
      </MDBCardBody>
    </MDBCol>
  </MDBRow>
</section>
);

export default Cards;
