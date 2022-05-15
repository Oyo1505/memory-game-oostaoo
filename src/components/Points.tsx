import React from "react";
import { StoreContext } from "../utils/StoreContext";
import { useContext } from "react";
const Points = () => {
  const { points } = useContext(StoreContext);
  return <span>{points} Points</span>;
};

export default Points;
