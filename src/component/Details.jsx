import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { getNews } from '../redux/news';
import '../CSS/details.css';

const Details = () => {
  const { id } = useParams(); // Access the 'id' parameter from the URL
  const news = useSelector((state) => state.news);
  const dispatch = useDispatch();

  useEffect(() => {
    // Dispatch an action to fetch the news based on 'id'
    dispatch(getNews()); // Assuming 'getNews' action takes 'id' as a parameter
  }, [dispatch]);

  // Find the selected news item in the filtered news
  const selectedNews = news.find((item) => item.source.name === id);

  return (
    <div>
      {selectedNews && (
        <ul className="details-container">
          <li className="details-content">
            <img className="details-img" src={selectedNews.urlToImage} alt="" />
          </li>
          <li className="details-content">
            <h2 className="details-heading"> Overview </h2>
          </li>
          <li className="details-content">
            <h2 className="details-label">Topic : </h2>
            <h2 className="details-title">{selectedNews.title}</h2>
          </li>
          <li className="details-content">
            <h2 className="details-label">Author : </h2>
            <p className="details-author">{selectedNews.author}</p>
          </li>
          <li className="details-content">
            <h2 className="details-label">Content : </h2>
            <p className="details-description">{selectedNews.description}</p>
          </li>
          <li className="details-content">
            <h2 className="details-label">Published At : </h2>
            <p className="details-publish">{selectedNews.publishedAt}</p>
          </li>
          <li className="details-content">
            <p className="details-link">
              <Link
                to={selectedNews.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read more
              </Link>
            </p>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Details;
