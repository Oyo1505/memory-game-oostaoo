import ButtonStart from "./ButtonStart";
import { FC, useContext } from "react";
import { StoreContext } from "../utils/StoreContext";
import Modal from "react-modal";
import FormName from "./FormName";

const ModalStart: FC = () => {
  const { modalIsOpen, totalSeconds } = useContext(StoreContext);
  Modal.setAppElement("#root");
  return (
    <Modal isOpen={modalIsOpen} className="modal" overlayClassName="Overlay">
      <div>
        <p>Vous avez {totalSeconds} secondes</p>
        <p>Votre pseudo</p>
        <FormName />
        <ButtonStart />
      </div>
    </Modal>
  );
};

export default ModalStart;
