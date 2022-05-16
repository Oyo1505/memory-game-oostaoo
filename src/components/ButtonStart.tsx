import { FC, useContext } from "react";
import { StoreContext } from "../utils/StoreContext";
import Message from "./Message";
const ButtonStart: FC = () => {
  const { startOver, startGame } = useContext(StoreContext);

  return (
    <div style={{ width: "200px" }}>
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
