import {modalItemFull} from './constants.js';
import {body} from './constants.js';
import {headerLogo} from './constants.js';
import {DESKTOP_WIDTH} from './constants.js';

function openModalItemFull (evt) {
  modalItemFull.classList.remove('modal-item-full--hide');
  body.classList.add('page__body--locked');

  // Add listeners to close modal
  document.addEventListener('keydown', onModalEscKeydown);
  headerLogo.addEventListener('click', onHeaderLogoModalClick);

  // Transfer data to modal
  let modalImageContainer = modalItemFull.querySelector('.image-section__image-conainer');
  let modalAuthorAvatar = modalItemFull.querySelector('.image-section__author-avatar');
  let modalAuthorName = modalItemFull.querySelector('.image-section__author-name');
  let modalAuthorNickname = modalItemFull.querySelector('.image-section__author-nickname');
  let modalMobileImage = modalItemFull.querySelector('.image-section__image').querySelector('img');
  let modalWideDesktopImage = modalItemFull.querySelector('.image-section__image').querySelector('source');
  let modalDownloadButton = modalItemFull.querySelector('.image-section__download-button');
  let modalImageSection = modalItemFull.querySelector('.modal-item-full__image-section');

  let selectedItem = evt.target.closest('.gallery__item');
  let selectedAuthorAvatar = selectedItem.querySelector('.gallery__item-author-avatar');
  let selectedAuthorName = selectedItem.querySelector('.gallery__item-author-name');
  let selectedAuthorNickname = selectedItem.querySelector('.gallery__item-author-nickname');
  let selectedMobileImage = selectedItem.querySelector('.gallery__item-image').querySelector('img');
  let selectedWideDesktopImage = selectedItem.querySelector('.gallery__item-image').querySelector('source');
  let selectedDownloadButton = selectedItem.querySelector('.gallery__item-download-button');

  modalAuthorAvatar.src = selectedAuthorAvatar.src;
  modalAuthorAvatar.alt = selectedAuthorAvatar.alt;
  modalAuthorName.textContent = selectedAuthorName.textContent;
  modalAuthorNickname.textContent = selectedAuthorNickname.textContent;
  modalMobileImage.src = selectedMobileImage.src;
  modalMobileImage.srcset = selectedMobileImage.srcset;
  modalMobileImage.alt = selectedMobileImage.alt;
  modalWideDesktopImage.srcset = selectedWideDesktopImage.srcset;
  modalDownloadButton.href = selectedDownloadButton.href;
  modalImageSection.style.backgroundImage = `url(${selectedMobileImage.src})`;

  let screenWidth = window.innerWidth;
  console.log(screenWidth);
  if (screenWidth >= DESKTOP_WIDTH) {
    let maxImageHeight = 650;
    let originalImageWidth = selectedItem.querySelector('.gallery__item-image').dataset.originalWidth;
    let originalImageHeight = selectedItem.querySelector('.gallery__item-image').dataset.originalHeight;

    let maxImageWidth = Math.floor(maxImageHeight / originalImageHeight * originalImageWidth);
    modalImageContainer.style.width = `${maxImageWidth}px`;
  }
}

function onModalEscKeydown (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeModalItemFull();
  }
}

function onHeaderLogoModalClick (evt) {
  evt.preventDefault();
  closeModalItemFull();
}

function closeModalItemFull () {
  modalItemFull.classList.add('modal-item-full--hide');
  body.classList.remove('page__body--locked');
  document.removeEventListener('keydown', onModalEscKeydown);
  headerLogo.removeEventListener('click', onHeaderLogoModalClick);
}

// EXPORT
export {openModalItemFull};
