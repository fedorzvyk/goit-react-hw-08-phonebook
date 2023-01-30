// import { statusFilters } from './constants';
import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilter = state => state.filter;

export const selectvisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filterName) => {
    return contacts.items.filter(contact =>
      contact.name.toLowerCase().includes(filterName.toLowerCase().trim())
    );
  }
);
