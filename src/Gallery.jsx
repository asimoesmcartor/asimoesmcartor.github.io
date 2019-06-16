import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Lightbox from "react-image-lightbox";
import "./styles/Lightbox.css";

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';


class Gallery extends React.Component {
state = {
  photoIndex: 0,
  isOpen: false,
  images: [
    process.env.PUBLIC_URL + '/images/preload-images/gallery-1.jpg',
    process.env.PUBLIC_URL + '/images/preload-images/gallery-2.jpg',
    process.env.PUBLIC_URL + '/images/preload-images/gallery-4.jpg',
    process.env.PUBLIC_URL + '/images/preload-images/gallery-5.jpg',
    process.env.PUBLIC_URL + '/images/preload-images/gallery-6.jpg',
    process.env.PUBLIC_URL + '/images/preload-images/gallery-7.jpg',
    process.env.PUBLIC_URL + '/images/preload-images/gallery-8.jpg',
    process.env.PUBLIC_URL + '/images/preload-images/gallery-9.jpg'
  ]
}

renderImages = () => {
  let photoIndex = -1;
  const { images } = this.state;

return images.map(imageSrc => {
  photoIndex++;
  const privateKey = photoIndex;
  return (
    <MDBCol md="4" key={photoIndex}>
      <figure classname="" onContextMenu={(e)=> e.preventDefault()}>
        <LazyLoadImage
          effect="opacity" 
          src={imageSrc} 
          alt="Gallery"
          className="img-fluid gallery-images" 
          onClick={()=>
            this.setState({ photoIndex: privateKey, isOpen: true })
          }
        />
      </figure>
    </MDBCol>
    );
  })
}

render() {
const { photoIndex, isOpen, images } = this.state;
  return (
      <MDBContainer className="mt-5">
        <div className="mdb-lightbox no-margin">
          <MDBRow className="">
            {this.renderImages()}
          </MDBRow>
        </div>
        {isOpen && (
        <div onContextMenu={(e)=> e.preventDefault()}>
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            imageTitle={photoIndex + 1 + "/" + images.length}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length
              })
              }
            />
          </div>
        )}
      </MDBContainer>
    );
  }
}

export default Gallery;
