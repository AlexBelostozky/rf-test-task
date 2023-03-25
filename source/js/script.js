import {getData} from './api.js';

// getData(console.log);

const masonryGridContainer = document.querySelector('.gallery__list');
const masonryGridOptions = {
  itemSelector: '.gallery__item-container',
  // columnWidth: 476,
  gutter: 27,
  // fitWidth: true,
  // columnWidth: 330,
  // resize: true
}

new Masonry(masonryGridContainer, masonryGridOptions);
