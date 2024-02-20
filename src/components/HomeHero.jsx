const HomeHero = () => {
  const heroStyle = {
    backgroundImage: `url("https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    color: "#fff",
    height: "80vh",
    display: "grid",
  };
  return (
    <div className="home-hero" style={heroStyle}>
      <h1>News</h1>
    </div>
  );
};

export default HomeHero;
