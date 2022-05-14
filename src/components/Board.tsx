import cardsFile from "../asset/json/card.json";
import ListCards from "./ListCards";

const Board = () => {
  return (
    <div className="board">
      <ListCards cards={cardsFile.cards} />
    </div>
  );
};

export default Board;
