import React, { Component } from 'react';
import image01 from './images/gallery/001.jpg'; 
import image02 from './images/gallery/002.jpg'; 
import image03 from './images/gallery/003.jpg'; 
import image04 from './images/gallery/004.jpg'; 
import image05 from './images/gallery/005.jpg'; 
import image06 from './images/gallery/006.jpg'; 
import image07 from './images/gallery/007.jpg'; 
import image08 from './images/gallery/008.jpg'; 
import image09 from './images/gallery/009.jpg'; 

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
    let img = galleryItems[index].querySelector('img').currentSrc;
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
    {url: image01, portrait: true},
    {url: image02, portrait: true},
    {url: image03, portrait: false},
    {url: image04, portrait: false},
    {url: image05, portrait: false},
    {url: image06, portrait: false},
    {url: image07, portrait: true},
    {url: image08, portrait: true},
    {url: image09, portrait: true}
   ];

    return (
      <div className="galleryThumbsWrapper">
          {galleryImages.map((imageItem, index) => 
            <ImageComponent
              key={index}
              image={imageItem}
            />
          )}
      </div>
    )
  }
}

class ImageComponent extends Component {
  render() {
    const key = this.props.key;
    const image = this.props.image;
    const imageUrl = image.url;
    let imagePortrait = image.portrait;

    if (imagePortrait) {
        return (
            <div className="galleryThumb portrait">
              <img src={imageUrl} alt={key}/>
            </div>
        );
    } else {
        return (
            <div className="galleryThumb">
              <img src={imageUrl} />
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
              <h1>Gallery</h1>
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


