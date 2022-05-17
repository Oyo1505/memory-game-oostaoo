import { FC } from "react";
import Card from "./Card";
import { CardInterface } from "../interfaces/interfaces";
import { v4 as uuid_v4 } from "uuid";

const ListCards: FC<{ cards: Array<CardInterface> }> = ({ cards }) => {
  if (cards.length === 0) return <p>Loading</p>;
  return (
    <div className="list-cards">
      {cards
        .sort(() => Math.random() - 0.5)
        .map((card: CardInterface, index) => (
          <Card
            name={card.name}
            image={card.image}
            index={index}
            key={uuid_v4()}
          />
        ))}
    </div>
  );
};

export default ListCards;
