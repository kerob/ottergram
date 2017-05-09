var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
var DETAIL_FRAME_SELECTOR = '[data-image-role="frame"]';
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';
var HIDDEN_DETAIL_CLASS = 'hidden-detail';
var TINY_EFFECT_CLASS = 'is-tiny';
var ESC_KEY = 27;

function setDetails(imageUrl, titleText) {
  'use strict';
  //code will go here
  var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
  detailImage.setAttribute('src', imageUrl)

  var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
  detailTitle.textContent = titleText;
}

function imageFromThumb(thumbnail){
  'use strict';
  //Grabs image detail from thumbnails
  return thumbnail.getAttribute('data-image-url');
}

function titleFromThumb(thumbnail){
  'use strict';
  //Grabs title details from thumbnail
  return thumbnail.getAttribute('data-image-title');
}
 function setDetailsFromThumb(thumbnail){
   'use strict';
   //pass thumbnail details to setDetails function
   setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
 }

 function addThumbClickHandler(thumb){
   'use strict';
   thumb.addEventListener('click', function (event) {
     event.preventDefault();
     setDetailsFromThumb(thumb);
     showDetails();
   });
 }

 function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

 //Gold Challenge Random otters
 function randomOtters(thumb){
   'use strict';
   //var dummyThumbs = getThumbnailsArray();
   var replacement = getRandomInt(0,4);
   thumb[replacement].setAttribute('data-image-url','http://media.breitbart.com/media/2016/07/surprised-pikachu-640x480.jpg');
   //thumb[replacement].setAttribute('src','')
 }

 function getThumbnailsArray() {
   'use strict';
   var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
   //randomOtters(thumbnails);
   var thumbnailArray = [].slice.call(thumbnails);
   return thumbnailArray;
 }

 function hideDetails(){
   'use strict';
   document.body.classList.add(HIDDEN_DETAIL_CLASS);
 }

 function showDetails(){
   'use strict';
   var frame = document.querySelector(DETAIL_FRAME_SELECTOR);
   document.body.classList.remove(HIDDEN_DETAIL_CLASS);
   frame.classList.add(TINY_EFFECT_CLASS);
   setTimeout(function() {
     frame.classList.remove(TINY_EFFECT_CLASS);
   }, 50);
 }

 function addKeyPressHandler(){
   'use strict';
   document.body.addEventListener('keyup', function (event){
     event.preventDefault();
     console.log(event.keyCode);
     if (event.keyCode === ESC_KEY){
       hideDetails();
     }
   });
 }

 function initializeEvents(){
   'use strict';
   var thumbnails = getThumbnailsArray();
   thumbnails.forEach(addThumbClickHandler);
   addKeyPressHandler();
   //randomOtters(thumbnails);
 }

initializeEvents();
