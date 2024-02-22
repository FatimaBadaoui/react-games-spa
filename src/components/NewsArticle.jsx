import React from "react";
import { useParams } from "react-router-dom";
import newsJSON from "../utilities/news.json";
import "./NewsArticle.css";
import TextToSpeechControl from "./TextToSpeachControl";

const NewsArticle = () => {
  const { id } = useParams();
  const { title, image, content, content2 } = newsJSON[id - 1];

  const articleText = `${title}. ${content}. ${content2}`;

  return (
    <div className="news-article">
      <h2>{title}</h2>
      <div className="article-image">
        <img src={image} alt="" />
      </div>
      <div className="news-content">
        <p>{content}</p>
        <p>{content2}</p>
        <TextToSpeechControl textToSpeak={articleText} />
      </div>
    </div>
  );
};

export default NewsArticle;
