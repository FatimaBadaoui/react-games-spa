const Developer = ({ img, name, position }) => {
  return (
    <div className="developer">
      <div className="dev-image">
        <img src={img} alt={name} />
      </div>
      <h3>{name}</h3>
      <p>{position}</p>
    </div>
  );
};

export default Developer;
