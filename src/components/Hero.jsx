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
