import { useContext } from "react";
import { StoreContext } from "../utils/StoreContext";
const ButtonStart = () => {
  const { startOver, startGame, message } = useContext(StoreContext);

  return (
    <>
      {message}
      <button style={{ display: startGame ? "none" : "" }} onClick={startOver}>
        Start
      </button>
    </>
  );
};

export default ButtonStart;
