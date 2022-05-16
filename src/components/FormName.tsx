import { FC, useContext } from "react";
import { StoreContext } from "../utils/StoreContext";

const FormName: FC = () => {
  const { handleChange, playerName } = useContext(StoreContext);
  return (
    <div>
      <input type="text" value={playerName} required onChange={handleChange} />
    </div>
  );
};

export default FormName;
