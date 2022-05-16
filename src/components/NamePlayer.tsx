import { StoreContext } from "../utils/StoreContext";
import { useContext, FC } from "react";
const NamePlayer: FC = () => {
  const { playerName } = useContext(StoreContext);
  return <h2>{playerName}</h2>;
};

export default NamePlayer;
