import cardsFile from "../asset/json/card.json";
import ListCards from "./ListCards";
import NamePlayer from "./NamePlayer";
import Points from "./Points";

const Board = () => {
  return (
    <div className="board">
      <NamePlayer />
      <Points />
      <ListCards cards={cardsFile.cards} />
    </div>
  );
};

export default Board;
