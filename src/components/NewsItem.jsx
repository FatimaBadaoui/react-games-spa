import { Link } from "react-router-dom";

const NewsItem = ({ image, title, fake_news, id }) => {
  return (
    <div className="news-item">
      <div className="news-image">
        <img src={image} alt={title} />
      </div>
      <div className="news-text">
        <h2>{title}</h2>
        <p>
          {fake_news}
        </p>
        <Link to={`/${id}`} > Read More</Link>
      </div>
    </div>
  );
};

export default NewsItem;
