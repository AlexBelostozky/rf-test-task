// API
const DATA_URL = 'https://api.unsplash.com/photos/';
const API_ACCESS_KEY = 'R2VYnBox1xbQOi_5yU8n97OSsUxUAoSr1Vs4rLTNquU';
const API_SECRET_KEY = 'HMF_LwV7E8ho9i-JiXCC0KKjFVsmy9eDJHrwsd84Z0o';

// Gallery
const GALLERY_VERTICAL_GAP = 27;

// DOM elements
const galleryList = document.querySelector('.gallery__list');
const galleryItemSelector = '.gallery__item-container';
const itemTemplateElement = document.querySelector('#gallery-item').content.querySelector('.gallery__item-container');

export {DATA_URL};
export {API_ACCESS_KEY};
export {API_SECRET_KEY};
export {GALLERY_VERTICAL_GAP};
export {galleryList};
export {galleryItemSelector};
export {itemTemplateElement};
