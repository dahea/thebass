import React, { Component } from 'react';

function expandImage(e){
    let img = e.srcElement.currentSrc;
    let windowScroll = window.scrollY;

    const pageBody = document.querySelector('#root');
    const imageWrapper = document.querySelector('.galleryImage');
    const imageObject = imageWrapper.querySelector('img');
    const close = imageWrapper.querySelector('.close');

    pageBody.style.position = 'fixed';
    pageBody.style.top = -windowScroll + 'px';
    imageWrapper.classList.add('active');
    imageObject.src = img;

    close.addEventListener('click', function(){
      imageWrapper.classList.remove('active');
      imageObject.src = '';
      pageBody.style.position = 'static';
      window.scrollTo(0, windowScroll);
    });

    if (window.screen.width > window.screen.height) {
      imageObject.style.width = 'auto';
      imageObject.style.height = 'inherit';
    } else {
      console.log('taller')
      imageObject.style.width = 'inherit';
      imageObject.style.height = 'auto';
    }
}

function setGalleryControls(imageWrapper){
  console.log('set gallery control functions here');

  const next = imageWrapper.querySelector('.next');
  const prev = imageWrapper.querySelector('.prev');


  next.addEventListener('click', function(){
    //imageObject.src = '';
    console.log(this);
  });

  prev.addEventListener('click', function(){
    //imageObject.src = '';
    console.log(this);
  });

}

function galleryInit(gallery){
  const galleryItems = gallery.querySelectorAll('.galleryThumb');
  const galleryLength = galleryItems.length;

  setGalleryControls(gallery.querySelector('.galleryImage'));


  console.log(galleryLength);

  galleryItems.forEach((galleryItem, index) => {
    galleryItem.addEventListener('click', expandImage);
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


