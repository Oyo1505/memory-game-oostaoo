import ButtonStart from "./ButtonStart";
import { useContext } from "react";
import { StoreContext } from "../utils/StoreContext";
import Modal from "react-modal";
import FormName from "./FormName";

const ModalStart = () => {
  const { modalIsOpen } = useContext(StoreContext);
  Modal.setAppElement("#root");
  return (
    <Modal isOpen={modalIsOpen} className="modal" overlayClassName="Overlay">
      <p>Votre pseudo</p>
      <FormName />
      <ButtonStart />
    </Modal>
  );
};

export default ModalStart;
