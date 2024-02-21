import React from 'react';
import { useParams } from 'react-router-dom';
import newsJSON from '../utilities/news.json';
import './NewsArticle.css';

const NewsArticle = () => {
  const { id } = useParams();
  const { title, image, content, content2 } = newsJSON[id - 1];

  // Split the title into parts based on spaces
  const titleParts = title.split(' ');

  return (
    <div className="news-article">
      <h2>
        <span className="highlight">{titleParts[0]} {titleParts[1]}</span>{/* First two words wrapped in a span */}
        {titleParts.slice(2).join(' ')}{/* Remaining part of the title */}
      </h2>
      <div className="article-image">
        <img src={image} alt="" />
      </div>
      <div className="news-content">
        <p>{content}</p>
        <p>{content2}</p>
      </div>
    </div>
  );
};

export default NewsArticle;