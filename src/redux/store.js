import { configureStore, combineReducers } from '@reduxjs/toolkit';

const store = configureStore({ reducer: rootReducer });

export default store;
