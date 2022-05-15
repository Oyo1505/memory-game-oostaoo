import Message from "./Message";
import NamePlayer from "./NamePlayer";
import Points from "./Points";

const DetailsPlayer = () => {
  return (
    <div id="details-player">
      <NamePlayer />
      <Points />
      <Message />
    </div>
  );
};

export default DetailsPlayer;
