import { useState } from "react";
import Card from "./Card.jsx";
import data from "../utilities/data.js";

const Cards = () => {
  data.sort(() => Math.random() - 0.5);
  const [cards, setCards] = useState(JSON.parse(JSON.stringify(data)));
  const [prevCardIndex, setPrevCardIndex] = useState(-1);

  function check(current) {
    if (cards[current].name == cards[prevCardIndex].name) {
      cards[current].status = "correct";
      cards[prevCardIndex].status = "correct";
      setCards((prevCards) => [...prevCards]);
      setPrevCardIndex(-1);
    } else {
      cards[current].status = "wrong";
      cards[prevCardIndex].status = "wrong";
      setCards((prevCards) => [...prevCards]);
      setTimeout(() => {
        cards[current].status = "";
        cards[prevCardIndex].status = "";
        setCards((prevCards) => [...prevCards]);
        setPrevCardIndex(-1);
      }, 500);
    }
  }

  function handleClick(index) {
    if (prevCardIndex === -1) {
      cards[index].status = "active";
      setCards([...cards]);
      setPrevCardIndex(index);
    } else {
      check(index);
    }
  }

  return (
    <>
      <div className="cards-container">
        {cards &&
          cards.map((item, index) => (
            <Card
              key={index}
              item={item}
              index={index}
              handleClick={handleClick}
            />
          ))}
      </div>
    </>
  );
};

export default Cards;
