import ButtonStart from "./ButtonStart";
import { useContext } from "react";
import { StoreContext } from "../utils/StoreContext";
import Modal from "react-modal";
import FormName from "./FormName";

const ModalStart = () => {
  const { modalIsOpen } = useContext(StoreContext);
  return (
    <Modal isOpen={modalIsOpen} contentLabel="Modal Start Game">
      <FormName />
      <ButtonStart />
    </Modal>
  );
};

export default ModalStart;
