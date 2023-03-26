import {getData} from './api.js';
import {createLayout} from './gallery-layout.js';
import {renderItems} from './items.js';
import {galleryList} from './constants.js';
import {DATA_URL} from './constants.js';

// Function for show items recieved from {dataSource} in {targetElement}
async function showItems(dataSource, targetElement) {
  try {
    const itemsData = await getData(dataSource);
    await renderItems(itemsData, targetElement);
    await createLayout();

  } catch (err) {
    console.log(err);
  }
}

showItems(DATA_URL, galleryList);
