{/* 

Usage:
Pass the website into the prop e.g: 

<Hero imageUrl={"www.google.com/image.jpg"} title={"Contact"} />

*******************************************
* imageUrl => for the image of the banner *
* title => for the h1 in the banner       *
*******************************************

*/}

const Hero = ({ imageUrl, title }) => {
  const heroStyle = {
    backgroundImage: `url("${imageUrl}")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    color: "#fff",
    height: "15rem",
    display: "grid",
    placeContent: "center",
  };

  return (
    <div style={heroStyle}>
      <h1>{title}</h1>
    </div>
  );
};

export default Hero;
