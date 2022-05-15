import { useContext } from "react";
import { StoreContext } from "../utils/StoreContext";
import Message from "./Message";
const ButtonStart = () => {
  const { startOver, startGame } = useContext(StoreContext);

  return (
    <div>
      <Message />
      <button
        style={{ display: startGame ? "none" : "" }}
        className="button"
        onClick={startOver}
      >
        Start
      </button>
    </div>
  );
};

export default ButtonStart;
