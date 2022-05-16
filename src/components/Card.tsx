import { FC, useContext } from "react";
import { StoreContext } from "../utils/StoreContext";

const Card: FC<{
  name: string;
  image: string;
  index: number;
}> = ({ name, image, index }) => {
  const { handleOnclick, isCardChosen } = useContext(StoreContext);
  const handleClick = (name: string, index: number) => {
    handleOnclick(name, index);
  };

  return (
    <div className={`cards `} onClick={() => handleClick(name, index)}>
      <img
        src={
          isCardChosen(name, index)
            ? image
            : "https://i.pinimg.com/originals/91/2c/48/912c489ca7b9b0c2412043bc7ea6bfbe.jpg"
        }
        alt={""}
        width={150}
        height={150}
      />
    </div>
  );
};

export default Card;
