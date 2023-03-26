import {galleryList} from './constants.js';
import {galleryItemSelector} from './constants.js';
import {GALLERY_VERTICAL_GAP} from './constants.js';

const masonryGridOptions = {
  itemSelector: galleryItemSelector,
  gutter: GALLERY_VERTICAL_GAP
}

function createLayout () {
  new Masonry(galleryList, masonryGridOptions);
}

export {createLayout};
