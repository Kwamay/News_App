import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiKey = 'a9ac4e86ef52453fb04ab2bd6800fda5';
const baseUrl = 'https://newsapi.org/v2/everything?';

const initialState = [];

const GET_NEWS = 'news/GET_NEWS';

export const getNews = createAsyncThunk(GET_NEWS, async (q) => {
  const response = await axios.get(`${baseUrl}q=${q}&apiKey=${apiKey}`);
  const { data } = response; // Axios automatically parses JSON
  const articles = data.articles.slice(0, 200); // Get the first 20 articles
  return articles;
});

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_NEWS}/fulfilled`:
      return action.payload;
    default:
      return state;
  }
};

export default newsReducer;
