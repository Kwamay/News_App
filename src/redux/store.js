import { configureStore, combineReducers } from '@reduxjs/toolkit';
import newsReducer from './newsSlice';

const rootReducer = combineReducers({ news: newsReducer });
const store = configureStore({ reducer: rootReducer });

export default store;
