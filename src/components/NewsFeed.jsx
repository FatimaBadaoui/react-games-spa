import NewsItem from "./NewsItem.jsx";
import newsJSON from "../utilities/news.json";

const NewsFeed = () => {
  // console.log(newsJSON);
  return (
    <div className="news-feed">
      {newsJSON.map((item, index) => (
        <NewsItem key={index} {...item} id={index + 1} />
      ))}
    </div>
  );
};

export default NewsFeed;
