import {getData} from './api.js';
import {createLayout} from './gallery-layout.js';
import {renderItems} from './items.js';


// getData((itemsData) => renderItems(itemsData));

// function showItems () {
//   return getData().then(renderItems)
// }

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
