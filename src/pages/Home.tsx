import Board from "../components/Board";
import ProgressBar from "../components/ProgressBar";

import ModalStart from "../components/Modal";
const Home = () => {
  return (
    <>
      <ModalStart />
      <Board />
      <ProgressBar />
    </>
  );
};

export default Home;
