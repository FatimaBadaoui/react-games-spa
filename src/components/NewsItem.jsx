import { Link } from "react-router-dom";

const NewsItem = ({ image, title, fake_news, id }) => {
  return (
    <Link to={`/${id}`}>
      <div className="news-item">
        <div className="news-image">
          <img src={image} alt={title} />
        </div>
        <div className="news-text">
          <h2>{title}</h2>
          <p>{fake_news}</p>
        </div>
      </div>
    </Link>
  );
};

export default NewsItem;
