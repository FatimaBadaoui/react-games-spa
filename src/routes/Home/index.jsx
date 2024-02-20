import HomeHero from "../../components/HomeHero.jsx";
import NewsFeed from "../../components/NewsFeed.jsx";
import "./style.css"
const Home = () => {
  return (
    <div className="home-container">
      <HomeHero />
      <NewsFeed />
    </div>
  );
};

export default Home;
