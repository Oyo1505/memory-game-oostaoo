import cardsFile from "../asset/json/card.json";
import DetailsPlayer from "./DetailsPlayer";
import ListCards from "./ListCards";

const Board = () => {
  return (
    <div id="board">
      <DetailsPlayer />
      <ListCards cards={cardsFile.cards} />
    </div>
  );
};

export default Board;
