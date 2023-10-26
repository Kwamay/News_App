import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getNews } from '../redux/news';
import SingleNews from './SingleNews';
import Heading from './Heading';

const Home = () => {
  // Array of book data
  const news = useSelector((state) => state.news);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);
  return (
    <div>
      <Heading />
      <div className="news-container">
        <div className="subnews-container">
          {
          news.map((N) => (
            <SingleNews
              id={N.source.name}
              key={Math.random()}
              title={N.title}
              author={N.author}
              image={N.urlToImage}
            />
          ))
        }
        </div>
      </div>

      <h3 className="footer">A Microverse Capstone Project by Kwamay</h3>
    </div>
  );
};

export default Home;
