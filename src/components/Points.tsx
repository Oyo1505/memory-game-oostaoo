import React from "react";
import { StoreContext } from "../utils/StoreContext";
import { useContext } from "react";
const Points = () => {
  const { points } = useContext(StoreContext);
  return <p>{points}</p>;
};

export default Points;
