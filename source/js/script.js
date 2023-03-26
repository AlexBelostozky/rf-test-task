import {getData} from './api.js';
import {createLayout} from './gallery-layout.js';
import {renderItems} from './items.js';
import {galleryList} from './constants.js';

// getData((itemsData) => renderItems(itemsData));

// getData().then(renderItems).then(createLayout).then(createLayout);


async function showItems() {
  try {
    const itemsData = await getData();
    await renderItems(itemsData);
    await createLayout();

  } catch (err) {
    console.log(err);
  }
}

showItems();
