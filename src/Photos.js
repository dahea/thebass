import React, { Component } from 'react';

function galleryInit(gallery){
  const galleryItems = gallery.querySelectorAll('.galleryThumb');
  const imageWrapper = document.querySelector('.galleryImage');
  const closeButton = imageWrapper.querySelector('.close');
  const pageBody = document.querySelector('#root');
  const imageObject = imageWrapper.querySelector('img');
  const galleryLength = galleryItems.length - 1;
  const next = imageWrapper.querySelector('.next');
  const prev = imageWrapper.querySelector('.prev');
  let isPortrait = false;
  let windowScroll;

  function openOverlay(){
      windowScroll = window.scrollY;
      pageBody.style.position = 'fixed';
      pageBody.style.width = '100%';
      pageBody.style.top = -windowScroll + 'px';
      imageWrapper.classList.add('active');
  }

  function closeOverlay(){
      imageWrapper.classList.remove('active');
      imageObject.src = '';
      imageObject.style.width = '';
      imageObject.style.height = '';
      pageBody.style.position = 'static';
      pageBody.style.width = 'auto';
      window.scrollTo(0, windowScroll);
  }

  function setImage(index){
    let img = (galleryItems[index].querySelector('img').currentSrc).slice(0,-10) + '-large.jpg';
    imageWrapper.querySelector('img').src = img;
    resizeImage();
    setGalleryControls(index);
  }

  function resizeImage(){
    if (window.innerWidth > window.innerHeight) {
      if (isPortrait) {
        imageObject.style.width = 'auto';
        imageObject.style.height = 'inherit';

      } else {
        imageObject.style.width = 'inherit';
        imageObject.style.height = 'auto';
      }
    } else {
      if (isPortrait) {
        imageObject.style.width = 'inherit';
        imageObject.style.height = 'auto';

      } else {
        imageObject.style.width = 'auto';
        imageObject.style.height = 'inherit';
      }
    }
  }

  function setGalleryControls(index){
    galleryLength > index ? next.classList.add('active') : next.classList.remove('active');
    index === 0 ? prev.classList.remove('active') : prev.classList.add('active');
    if (galleryLength > index) {
      next.addEventListener('click', function(){
        setImage(index+1);
      });
    }

    if (index !== 0) {
      prev.addEventListener('click', function(){
        setImage(index-1);
      });
    }
  }

  closeButton.addEventListener('click', function(){
      closeOverlay();
  });

  galleryItems.forEach((galleryItem, index) => {
    galleryItem.addEventListener('click', function(){
      openOverlay();
    });
  });

  galleryItems.forEach((galleryItem, index) => {
    galleryItem.addEventListener('click', function(){
      isPortrait = this.classList.contains('portrait');
      setImage(index);
      setGalleryControls(index);
    });
  });
}

class ImagesList extends Component {

  render() {

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

    return (
      <div className="galleryThumbsWrapper">
          {galleryImages.map((imageItem, index) => 
            <ImageComponent
              image={imageItem}
            />
          )}
      </div>
    )
  }
}

class ImageComponent extends Component {
  render() {
    const image = this.props.image;
    const imageUrl = image.url;
    const imageAlt = image.alt;
    let imagePortrait = image.portrait;

    if (imagePortrait) {
        return (
            <div className="galleryThumb portrait">
              <img src={"./images/gallery/" + imageUrl + "-small.jpg"} alt={imageAlt} />
            </div>
        );
    } else {
        return (
            <div className="galleryThumb">
              <img src={"./images/gallery/" + imageUrl + "-small.jpg"} alt={imageAlt} />
            </div>
        );
    }
  }
}

class Photos extends Component {
	componentDidMount() {
    galleryInit(document.querySelector('#gallery'));
	}

  render() {

    return (
      <div className="page-wrapper photos">
        <div className="site-wrapper">
            <div className="site-limit">

              <div id="gallery">

                <ImagesList />
                
                <div className="galleryImage">
                  <div className="close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"/></svg></div>
                  <img src="" />

                  <div className="galleryControls prev">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>
                  </div>

                  <div className="galleryControls next">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>
                  </div>
                </div>

              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default Photos;


