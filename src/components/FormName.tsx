import React, { useContext } from "react";
import { StoreContext } from "../utils/StoreContext";

const FormName = () => {
  const { handleChange, playerName } = useContext(StoreContext);
  return (
    <div>
      <input type="text" value={playerName} required onChange={handleChange} />
    </div>
  );
};

export default FormName;
