// import variables rather than use strings for 'type' to assist in error detection (typos etc)
import {
  CHANGE_SEARCH_FIELD,
  REQUEST_MONSTERS_PENDING,
  REQUEST_MONSTERS_SUCCESS,
  REQUEST_MONSTERS_FAIL
} from 'constants.js';

const initialStateSearch = {
  searchField: ''
}

export const searchMonsters = (state=initialStateSearch, action={}) => {
  console.log(action.type);
  switch(action.type) {
    case CHANGE_SEARCH_FIELD:
      // return Object.assign({}, state, { searchField: action.payload });
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
}

const initialStateMonsters = {
  monsters: [],
  isPending: true,
  error: ''
}

export const requestMonsters = (state=initialStateMonsters, action={}) => {
  switch (action.type) {
    case REQUEST_MONSTERS_PENDING:
      return Object.assign({}, state, {isPending: true})
    case REQUEST_MONSTERS_SUCCESS:
      return Object.assign({}, state, {monsters: action.payload, isPending: false})
    case REQUEST_MONSTERS_FAIL:
      return Object.assign({}, state, {error: action.payload})
    default:
      return state
  }
}
