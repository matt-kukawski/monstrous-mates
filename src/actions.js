// import variables rather than use strings for 'type' to assist in error detection (typos etc)
import {
  CHANGE_SEARCH_FIELD,
  REQUEST_MONSTERS_PENDING,
  REQUEST_MONSTERS_SUCCESS,
  REQUEST_MONSTERS_FAIL
} from 'constants.js';
// import { apiCall } from './api/api'

export const setSearchField = (text) => {
  // console.log(text);
  return {
    type: CHANGE_SEARCH_FIELD,
    payload: text
  }
}



// ordinarily redux expects an object to be returned by an action, reduxThunk middleware allows a function to be returned initially followed by the appropriate action
export const requestMonsters = () => (dispatch) => {
  dispatch({ type: REQUEST_MONSTERS_PENDING })
  var proxyUrl = 'https://mk-mates.onrender.com/',
      targetUrl = 'https://jsonplaceholder.typicode.com/users';
  fetch(proxyUrl + targetUrl)
    .then(response => response.json())
    .then(data => dispatch({ type: REQUEST_MONSTERS_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: REQUEST_MONSTERS_FAIL, payload: error }))
}
