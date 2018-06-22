import React, { Component } from 'react';

const galleryImages = [
  {url: 'dahea-waystation-bk', portrait: true, alt: 'DaHea playing bass for music video shoot at the Way Station in Brooklyn, NY'},
  {url: 'dahea-parkside-lounge', portrait: true, alt: 'DaHea playing bass with Hamin Reed at Parkside Lounge in the Lower East Side, NY'},
  {url: 'dahea-branded-saloon', portrait: false, alt: 'DaHea playing bass with Karen & the Sorrows at Branded Saloon in Brooklyn, NY'},
  {url: 'dahea-bowery-electric-setting-up', portrait: false, alt: 'DaHea playing bass with Karen & the Sorrows at the Bowery Electric in New York, NY'},
  {url: 'dahea-nj-clash-bar', portrait: false, alt: 'DaHea playing bass with Castle Black at Clash Bar in Clifton, NJ'},
  {url: 'dahea-with-dma-delancey', portrait: false, alt: 'DaHea playing bass with Dark Moon Apache at the Delancey in Manhattan, NY'},
  {url: 'dahea-portrait-nyc-rooftop', portrait: true, alt: 'DaHea portrait photo'},
  {url: 'dahea-coneyisland', portrait: true, alt: 'DaHea playing bass with Dark Moon Apache near Coney Island in Brooklyn, NY'},
  {url: 'dahea-delancey-upstairs', portrait: true, alt: 'DaHea playing bass with Bunny Punch at the Delancey in Manhattan, NY'}
 ];

const pageBody = document.getElementById('root');
let isPortrait = false;
let windowScroll;

class Gallery extends Component{

  constructor(props){
    super(props);
    this.state = {
      activeImage: 0,
      hasPrevImage: true,
      hasNextImage: true,
      isPopupVisible: false
    }

    this.openPopup = this.openPopup.bind(this);
    this.closePopup = this.closePopup.bind(this);
    this.prevImage = this.prevImage.bind(this);
    this.nextImage = this.nextImage.bind(this);
  }

  openPopup(imageIndex) {
    windowScroll = window.scrollY;
    pageBody.style.position = 'fixed';
    pageBody.style.width = '100%';
    pageBody.style.top = -windowScroll + 'px';

    this.setState({
      isPopupVisible: true,
      activeImage: imageIndex,
      hasPrevImage: imageIndex !== 0,
      hasNextImage: imageIndex !== galleryImages.length - 1
    });
  }

  closePopup() {
    pageBody.style.position = 'static';
    pageBody.style.width = 'auto';
    pageBody.style.top = 0;
    window.scrollTo(0, windowScroll);

    return (
      this.setState(prevState => ({
        isPopupVisible: !prevState.isPopupVisible
      }))
    );
  }

  prevImage(imageIndex) {
    const newActiveImage = imageIndex - 1;
    this.setState({
      activeImage: newActiveImage,
      hasPrevImage: newActiveImage !== 0,
      hasNextImage: newActiveImage !== galleryImages.length - 1
    });
  }

  nextImage(imageIndex) {
    const newActiveImage = imageIndex + 1;
    this.setState({
      activeImage: newActiveImage,
      hasPrevImage: newActiveImage !== 0,
      hasNextImage: newActiveImage !== galleryImages.length - 1
    });
  }

  render(){
    return (
      <div id="gallery">
        <ImagesList images={this.galleryImages} openPopup={this.openPopup} isPopupVisible={this.state.isPopupVisible} />
        <Popup isPopupVisible={this.state.isPopupVisible} activeImage={this.state.activeImage} closePopup={this.closePopup} prevImage={this.prevImage} nextImage={this.nextImage} hasPrevImage={this.state.hasPrevImage} hasNextImage={this.state.hasNextImage}/>
      </div>
    )
  }
}


class ImagesList extends Component {
  render() {
    return (
      <div className="galleryThumbsWrapper">
          {galleryImages.map((imageItem, index) => 
            <ThumbnailComponent image={imageItem}  index={index} openPopup={this.props.openPopup} />
          )}
      </div>
    )
  }
}

class ThumbnailComponent extends Component {
  render() {
    const image = this.props.image;
    const imageUrl = image.url;
    const imageAlt = image.alt;
    const imageIndex = this.props.index;
    let imagePortrait = image.portrait;

    return (
        <div className={imagePortrait ? "galleryThumb portrait" : "galleryThumb"} onClick={()=>this.props.openPopup(imageIndex)} activeImage={this.props.activeImage}>
          <img src={"./images/gallery/" + imageUrl + "-small.jpg"} alt={"Image " + imageIndex +" - " +imageAlt} />
        </div>
    );
  }
}

class ImageComponent extends Component{
  render(){
    return (<img src={"./images/gallery/" + galleryImages[this.props.activeImage].url + "-large.jpg"}  />);
  }
}

class Popup extends Component{
  render(){
    return (
      <div className={this.props.isPopupVisible ? "galleryImage active" : "galleryImage"} >
        <CloseButton closePopup={this.props.closePopup} />
        <ImageComponent activeImage={this.props.activeImage} />
        <PrevButton prevImage={this.props.prevImage} hasPrevImage={this.props.hasPrevImage} activeImage={this.props.activeImage} />
        <NextButton nextImage={this.props.nextImage} hasNextImage={this.props.hasNextImage} activeImage={this.props.activeImage} />
      </div>
    )
  }
}

class CloseButton extends Component {
  render() {
    return (
      <div className="close" onClick={this.props.closePopup}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"/></svg>
      </div>
    );
  }
}

class PrevButton extends Component {
  render() {
    return (
      <div className={"galleryControls prev" + (this.props.hasPrevImage ? " active" : "")} onClick={()=>this.props.prevImage(this.props.activeImage)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>
      </div>
    );
  }
}

class NextButton extends Component {
  render() {
    return (
      <div className={"galleryControls next" + (this.props.hasNextImage ? " active" : "")} onClick={()=>this.props.nextImage(this.props.activeImage)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>    
      </div>
    );
  }
}

class Photos extends Component {
  render() {
    return (
      <div className="page-wrapper photos">
        <div className="site-wrapper">
            <div className="site-limit">
              <Gallery images={galleryImages} />
            </div>
          </div>
      </div>
    );
  }
}

export default Photos;


