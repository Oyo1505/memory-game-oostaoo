import { useContext } from "react";
import { StoreContext } from "../utils/StoreContext";

const ButtonStart = () => {
  const { startOver, startGame } = useContext(StoreContext);
  return (
    <button style={{ display: startGame ? "none" : "" }} onClick={startOver}>
      ButtonStart
    </button>
  );
};

export default ButtonStart;
