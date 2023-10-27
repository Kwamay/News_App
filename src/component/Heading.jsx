import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TfiSearch } from 'react-icons/tfi';
import { getNews } from '../redux/newsSlice';
import '../CSS/singlenews.css';

const Heading = () => {
  const [searchQuery, setSearchQuery] = useState(''); // State to store the search query
  const heading = 'News Headlines';
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault(); // Prevent the form from submitting
    // Call the fetchNews function with the search query
    dispatch(getNews(searchQuery));
  };

  // Function to check if a user has searched for something
  const hasSearched = () => searchQuery.trim() !== ''; // Check if searchQuery is not empty or just whitespace

  return (
    <div>
      <div className="news-image-container">
        <img className="homepage-img" alt="" />
        <div className="homepage-content">
          <h2 className="homepage-text">{heading}</h2>
          <p className="headlines">200</p>
        </div>
      </div>
      <form className="search-content" onSubmit={handleSearch}>
        <input
          className="search-news"
          placeholder="Search News"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="search-btn" type="submit">
          <TfiSearch />
        </button>
      </form>

      {/* Display a message or perform an action if the user has searched for something */}
      {hasSearched() && (
        <div>
          <p>
            You have searched for:
            {searchQuery}
          </p>
          {/* You can add more content or actions here */}
        </div>
      )}
    </div>
  );
};

export default Heading;
