import { FC } from "react";
import Message from "./Message";
import NamePlayer from "./NamePlayer";
import Points from "./Points";

const DetailsPlayer: FC = () => {
  return (
    <div id="details-player">
      <NamePlayer />
      <Points />
    </div>
  );
};

export default DetailsPlayer;
