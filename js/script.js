import {getData} from './api.js';
import {createLayout} from './gallery-layout.js';
import {renderItems} from './items.js';
import {galleryList} from './constants.js';
import {DATA_URL} from './constants.js';
import {openModalItemFull} from './modal-item-full.js'

// Function for show items recieved from {dataSource} in {targetElement}
async function showItems (dataSource, targetElement) {
  try {
    const itemsData = await getData(dataSource);
    await renderItems(itemsData, targetElement);
    await createLayout();

  } catch (err) {
    console.log(err);
  }
}

// Set listeners to {targetGallrey}'s elements
function setItemsListeners (targetGallrey) {
  targetGallrey.addEventListener('click', onGalleryClick);
}

showItems(DATA_URL, galleryList)
  .then(setItemsListeners(galleryList));

function onGalleryClick (evt) {
  if (evt.target.closest('.gallery__item-open-button')) {
    evt.preventDefault();
    openModalItemFull(evt);
  }

  if (evt.target.closest('.gallery__item-like-button')) {
    evt.preventDefault();
    console.log('like');
  }
}
