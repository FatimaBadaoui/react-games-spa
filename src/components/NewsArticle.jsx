import { useParams } from "react-router-dom";
import newsJSON from "../utilities/news.json";

import "./NewsArticle.css";

const NewsArticle = () => {
  const { id } = useParams();
  return (
    <div className="news-article">
      <h2>{newsJSON[id - 1].title}</h2>
      <div className="article-image">
        <img src={newsJSON[id - 1].image} alt="" />
      </div>
      <div className="news-content">
        <p>{newsJSON[id - 1].content}</p>
        <p>{newsJSON[id - 1].content2}</p>
      </div>
    </div>
  );
};

export default NewsArticle;
