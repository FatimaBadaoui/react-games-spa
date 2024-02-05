const Card = ({ item, index, handleClick }) => {
  const itemClass = item.status ? " active " + item.status : "";

  return (
    <div className={"card" + itemClass} onClick={() => handleClick(index)}>
      <img src={item.img} alt={item.name} />
    </div>
  );
};

export default Card;
