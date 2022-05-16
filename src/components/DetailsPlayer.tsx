import { FC } from "react";
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
