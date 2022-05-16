import { StoreContext } from "../utils/StoreContext";
import { FC, useContext } from "react";

const Points: FC = () => {
  const { points } = useContext(StoreContext);

  return <span>{points} Points</span>;
};

export default Points;
