import {galleryList} from './constants.js'; // Gallery container
import {itemTemplateElement} from './constants.js'; // Gallery item template


// Функция для наполнения заготовки данными
// function renderItems (itemsData) {
//   // Создаём заготовку-контейнер списка фотографии
//   const itemsBlankElement = document.createDocumentFragment();
//
//   itemsData.forEach(({urls, alt_description, user, links}) => {
//     const newItem = itemTemplateElement.cloneNode(true);
//
//     newItem.querySelector('.gallery__item-image').querySelector('img').src = urls.raw + '&w=330';
//     newItem.querySelector('.gallery__item-image').querySelector('img').srcset = urls.raw + '&w=330&dpr=2' + ' 2x';
//     newItem.querySelector('.gallery__item-image').querySelector('source').srcset = urls.raw + '&w=476' + ' 1x, ' + urls.raw + '&w=476&dpr=2' + ' 2x';
//     newItem.querySelector('.gallery__item-image').querySelector('img').alt = alt_description;
//
//     newItem.querySelector('.gallery__item-author-avatar').src = user.profile_image.large;
//     newItem.querySelector('.gallery__item-author-avatar').alt = `Аватар ${user.name}`;
//     newItem.querySelector('.gallery__item-author-name').textContent = user.name;
//     newItem.querySelector('.gallery__item-author-nickname').textContent = user.username;
//
//     newItem.querySelector('.gallery__item-download-button').href = links.download;
//
//     itemsBlankElement.append(newItem);
//   });
//   // И только в конце отрисовываем всё из заготовки-контейнера
//   return galleryList.appendChild(itemsBlankElement);
// }

async function renderItems (itemsData) {
  // Создаём заготовку-контейнер списка фотографии
  try {
    const itemsBlankElement = await document.createDocumentFragment();

    itemsData.forEach(({urls, alt_description, user, links}) => {
      const newItem = itemTemplateElement.cloneNode(true);

      newItem.querySelector('.gallery__item-image').querySelector('img').src = urls.raw + '&w=330';
      newItem.querySelector('.gallery__item-image').querySelector('img').srcset = urls.raw + '&w=330&dpr=2' + ' 2x';
      newItem.querySelector('.gallery__item-image').querySelector('source').srcset = urls.raw + '&w=476' + ' 1x, ' + urls.raw + '&w=476&dpr=2' + ' 2x';
      newItem.querySelector('.gallery__item-image').querySelector('img').alt = alt_description;

      newItem.querySelector('.gallery__item-author-avatar').src = user.profile_image.large;
      newItem.querySelector('.gallery__item-author-avatar').alt = `Аватар ${user.name}`;
      newItem.querySelector('.gallery__item-author-name').textContent = user.name;
      newItem.querySelector('.gallery__item-author-nickname').textContent = user.username;

      newItem.querySelector('.gallery__item-download-button').href = links.download;

      itemsBlankElement.append(newItem);
    });
    // И только в конце отрисовываем всё из заготовки-контейнера
    return await galleryList.appendChild(itemsBlankElement);

  } catch (err) {
    console.log(err);
  }
}

export {renderItems};
