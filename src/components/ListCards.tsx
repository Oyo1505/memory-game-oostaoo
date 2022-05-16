import { FC } from "react";
import Card from "./Card";
import { CardInterface } from "../interfaces/interfaces";

const ListCards: FC<{ cards: Array<CardInterface> }> = ({ cards }) => {
  if (cards.length === 0) return <p>Loading</p>;
  return (
    <div className="list-cards">
      {cards
        .sort(() => Math.random() - 0.5)
        .map((card: CardInterface, index) => (
          <>
            <Card
              name={card.name}
              image={card.image}
              index={index}
              key={index}
            />
          </>
        ))}
    </div>
  );
};

export default ListCards;
