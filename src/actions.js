// import variables rather than use strings for 'type' to assist in error detection (typos etc)
import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAIL
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
export const requestRobots = () => (dispatch) => {
  dispatch({ type: REQUEST_ROBOTS_PENDING })
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: REQUEST_ROBOTS_FAIL, payload: error }))
}
