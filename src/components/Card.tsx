import { FC, useContext } from "react";
import { StoreContext } from "../utils/StoreContext";

const Card: FC<{ name: string; image: string; index: number }> = ({
  name,
  image,
  index,
}) => {
  const { handleOnclick, isCardChosen } = useContext(StoreContext);
  const handleClick = (name: string, index: number) => {
    handleOnclick(name, index);
  };

  return (
    <div className={`cards `} onClick={() => handleClick(name, index)}>
      <img
        src={isCardChosen(name, index) ? image : "BLANK_CARD"}
        alt={""}
        width={150}
        height={150}
      />
    </div>
  );
};

export default Card;
