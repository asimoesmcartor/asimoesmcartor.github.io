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
    'gallery-1.jpg',
    'gallery-2.jpg',
    'gallery-4.jpg',
    'gallery-5.jpg',
    'gallery-6.jpg',
    'gallery-7.jpg',
    'gallery-8.jpg',
    'gallery-9.jpg'
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
      <figure>
        <LazyLoadImage
          effect="opacity" 
          placeholderSrc={process.env.PUBLIC_URL + '/images/preload-images/' + imageSrc}
          src={process.env.PUBLIC_URL + '/images/' + imageSrc} 
          alt="Gallery"
          className="img-fluid" 
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
        )}
      </MDBContainer>
    );
  }
}

export default Gallery;
