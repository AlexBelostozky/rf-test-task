import {DATA_URL} from './constants.js';
import {API_ACCESS_KEY} from './constants.js';

const ACCESS_DATA_URL = DATA_URL + '?client_id=' + API_ACCESS_KEY;
const FULL_DATA_URL = 'https://api.unsplash.com/photos/?client_id=R2VYnBox1xbQOi_5yU8n97OSsUxUAoSr1Vs4rLTNquU';

// Функция для получения фотографий с сервера
async function getData() {
  try {
    const response = await fetch(DATA_URL, {
      method: 'GET',
      headers: {
        Authorization: 'Client-ID ' + API_ACCESS_KEY,
      }
    });
    const itemsData = await response.json();
    return itemsData

  } catch (err) {
    console.log(err)
  }
}

export {getData};
