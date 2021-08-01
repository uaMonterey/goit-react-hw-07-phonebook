// import { combineReducers } from 'redux';

// import { createReducer } from '@reduxjs/toolkit';
// import { addContact, deleteContact, changeFilter } from './phonebook-actions';
// import intialContacts from 'data/contacts.json';

// const items = createReducer(intialContacts, {
//   [addContact]: (state, action) => [action.payload, ...state],
//   [deleteContact]: (state, action) =>
//     state.filter(({ id }) => id !== action.payload),
// });
// const filter = createReducer('', {
//   [changeFilter]: (_, action) => action.payload,
// });
// console.log('contact Reduser', items);

// export default combineReducers({
//   items,
//   filter,
// });

import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  changeFilter,
} from '../phonebook/phonebook-actions';

const contacts = createReducer([], {
  [fetchContactSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const loading = createReducer(false, {
  [fetchContactRequest]: () => true,
  [fetchContactSuccess]: () => false,
  [fetchContactError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  contacts,
  filter,
  loading,
});
