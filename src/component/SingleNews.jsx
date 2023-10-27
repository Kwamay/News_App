import React from 'react';
import Button from './Button';
import '../CSS/singlenews.css';

const SingleNews = (props) => {
  const {
    id, title, author, image,
  } = props;
  return (

    <div className="subnews-content">
      <div className="img-container">
        <img className="subnews-img" alt="" src={image} />
        <div className="button-new-container">
          <Button id={id} />
          <h3 className="news-content">{title}</h3>
          <p className="news-author">{author}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleNews;
