import Board from "../components/Board";
import ProgressBar from "../components/ProgressBar";

import ModalStart from "../components/Modal";
const Home = () => {
  return (
    <>
      <div id="home">
        <ProgressBar />
        <Board />
      </div>
      <ModalStart />
    </>
  );
};

export default Home;
