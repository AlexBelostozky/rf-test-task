import {galleryList} from './constants.js'; // Gallery container
import {itemTemplateElement} from './constants.js'; // Gallery item template

async function renderItems (itemsData, targetElement) {
  try {
    // Create blank container for items
    const itemsBlankElement = document.createDocumentFragment();

    const templateItemMobileMinHeight = itemTemplateElement.querySelector('.gallery__item-image').querySelector('img').height;
    const templateItemWideDesktopMinHeight = itemTemplateElement.querySelector('.gallery__item-image').querySelector('source').height;
    const templateItemMobileWidth = itemTemplateElement.querySelector('.gallery__item-image').querySelector('img').width;
    const templateItemWideDesktopWidth = itemTemplateElement.querySelector('.gallery__item-image').querySelector('source').width;

    itemsData.forEach(({width, height, urls, alt_description, user, links}) => {
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

      newItem.querySelector('.gallery__item-image').querySelector('img').height = Math.max(templateItemMobileWidth / width * height, templateItemMobileMinHeight);
      newItem.querySelector('.gallery__item-image').querySelector('source').height = Math.max(templateItemWideDesktopWidth / width * height, templateItemWideDesktopMinHeight);

      itemsBlankElement.append(newItem);
    });
    // Finally add all items from blank container to target element
    return await targetElement.appendChild(itemsBlankElement);

  } catch (err) {
    console.log(err);
  }
}

export {renderItems};
