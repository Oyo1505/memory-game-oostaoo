import { StoreContext } from "../utils/StoreContext";
import { useContext } from "react";
const NamePlayer = () => {
  const { playerName } = useContext(StoreContext);
  return <h2>{playerName}</h2>;
};

export default NamePlayer;
