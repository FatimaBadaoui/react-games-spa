import Developer from "../../components/Developer.jsx";
import "./style.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-hero">
        <h1>About Us</h1>
      </div>
      <div className="about-info">
        <div className="history">
          <div className="image">
            <img src="https://images.unsplash.com/photo-1532009877282-3340270e0529?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </div>
          <div className="history-text">
            <h2>The beginning</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              deserunt doloremque ipsam explicabo delectus quidem sint, quae,
              velit, unde commodi amet. Temporibus necessitatibus explicabo
              nulla beatae natus quisquam cum nemo nostrum sapiente eaque
              reprehenderit, quae, deleniti, architecto totam? Expedita deleniti
              cumque dolores harum. Possimus aut incidunt sint. Delectus, enim
              illo?
            </p>
          </div>
        </div>
        <div className="mission-vision">
          <div className="mission">
            <h3>Our Mission</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto
              ipsum voluptas eos sint deserunt, nam ex nobis quia accusantium
              aut nihil magnam veniam fugiat vitae molestiae. Maxime consectetur
              ducimus pariatur doloremque, perspiciatis, itaque molestias eius
              veritatis soluta commodi unde excepturi!
            </p>
          </div>
          <div className="vision">
            <h3>Our Vision</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et
              officia repudiandae dicta tempore ipsa ullam magni nihil,
              accusantium sequi atque architecto numquam rerum ex consequatur
              eveniet quam! Quidem blanditiis, eveniet eaque nulla ipsam minima
              magnam a sapiente omnis cupiditate illo.
            </p>
          </div>
        </div>
        <div className="developers">
          <h2>Behind the Scene</h2>
          <Developer
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqhqf2sGGNDhLEocNibL7Z-tBVYUgRiAnTBA&usqp=CAU"
            name="Fatima Badaoui"
            position="Developer"
          />
          <Developer
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqhqf2sGGNDhLEocNibL7Z-tBVYUgRiAnTBA&usqp=CAU"
            name="Per-Emil Johansson"
            position="Developer"
          />
          <Developer
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqhqf2sGGNDhLEocNibL7Z-tBVYUgRiAnTBA&usqp=CAU"
            name="Elilta Mesfin Raya"
            position="Developer"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
