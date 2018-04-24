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

  let windowScroll = window.scrollY;

  function openOverlay(){
      pageBody.style.position = 'fixed';
      pageBody.style.top = -windowScroll + 'px';
      imageWrapper.classList.add('active');

      if (window.screen.width > window.screen.height) {
        imageObject.style.width = 'auto';
        imageObject.style.height = 'inherit';
      } else {
        console.log('taller')
        imageObject.style.width = 'inherit';
        imageObject.style.height = 'auto';
      }
  }

  function closeOverlay(){
      imageWrapper.classList.remove('active');
      imageObject.src = '';
      pageBody.style.position = 'static';
      window.scrollTo(0, windowScroll);


      pageBody.style.position = 'fixed';
      pageBody.style.top = -windowScroll + 'px';
      imageWrapper.classList.add('active');
  }

  function setImage(index){
    let img = galleryItems[index].querySelector('img').currentSrc;
    imageWrapper.querySelector('img').src = img;
    setGalleryControls(index);
  }

  function setGalleryControls(index){
    galleryLength > index ? next.classList.add('active') : next.classList.remove('active');
    index === 0 ? prev.classList.remove('active') : prev.classList.add('active');
    if (galleryLength > index) {
      next.addEventListener('click', function(){
        setImage(index+1);
      });
    }

    if (index != 0) {
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
      setImage(index);
      setGalleryControls(index);
    });
  });
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
                <div className="galleryThumb">
                  <img src="./images/gallery/001.jpg" alt="gallery image 1" />
                </div>
                <div className="galleryThumb">
                  <img src="./images/gallery/002.jpg" alt="gallery image 2" />
                </div>
                <div className="galleryThumb">
                  <img src="./images/gallery/003.jpg" alt="gallery image 3" />
                </div>
                <div className="galleryThumb">
                  <img src="./images/gallery/004.jpg" alt="gallery image 4" />
                </div>
                <div className="galleryThumb">
                  <img src="./images/gallery/005.jpg" alt="gallery image 5" />
                </div>

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


