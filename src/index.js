import './css/styles.css';
import { fetchContriesByName } from './fetch-countries';
import debounce from 'lodash.debounce';
import { specificInfo, onFetchError } from './notify';
import { renderMarkup } from './render-markup';
import { clearTemplate } from './clear-template';

const DEBOUNCE_DELAY = 300;

const searchBox = document.querySelector('#search-box');
searchBox.addEventListener('input', debounce(onSearchBoxInput, DEBOUNCE_DELAY));

// console.dir(searchBox);

function onSearchBoxInput(event) {
  event.preventDefault();

  const searchQuery = event.target.value;
  if (!event.target.value) {
    clearTemplate();
    return;
  }

  fetchContriesByName(searchQuery)
    .then(data => {
      console.log(data);
      if (data.length > 10) {
        specificInfo();
        clearTemplate();
        return;
      }

      renderMarkup(data);
    })
    .catch(error => {
      onFetchError();
      clearTemplate();
    });
}
