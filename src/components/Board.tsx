import { FC } from "react";
import cardsFile from "../asset/json/card.json";
import BestPlayer from "./BestPlayer";
import DetailsPlayer from "./DetailsPlayer";
import ListCards from "./ListCards";

const Board: FC = () => {
  return (
    <div id="board">
      <DetailsPlayer />
      <ListCards cards={cardsFile.cards} />
      <BestPlayer />
    </div>
  );
};

export default Board;
