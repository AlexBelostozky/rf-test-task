// API
const DATA_URL = 'https://api.unsplash.com/photos/';
const API_ACCESS_KEY = 'R2VYnBox1xbQOi_5yU8n97OSsUxUAoSr1Vs4rLTNquU';

// Gallery
const GALLERY_VERTICAL_GAP = 27;
const MOBILE_WIDTH = 375;
const TABLET_WIDTH = 687;
const DESKTOP_WIDTH = 1280;
const WIDE_DESKTOP_WIDTH = 1920;

// DOM elements
const galleryList = document.querySelector('.gallery__list');
const galleryItemSelector = '.gallery__item-container';
const itemTemplateElement = document.querySelector('#gallery-item').content.querySelector('.gallery__item-container');
const modalItemFull = document.querySelector('.modal-item-full');
const body = document.querySelector('.page__body');
const headerLogo = document.querySelector('.header__logo');

// EXPORT CONSTANTS //
export {DATA_URL};
export {API_ACCESS_KEY};
export {GALLERY_VERTICAL_GAP};
export {galleryList};
export {galleryItemSelector};
export {itemTemplateElement};
export {modalItemFull};
export {body};
export {headerLogo};
export {MOBILE_WIDTH};
export {TABLET_WIDTH};
export {DESKTOP_WIDTH};
export {WIDE_DESKTOP_WIDTH};
