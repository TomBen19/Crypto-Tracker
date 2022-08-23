import { useState } from "react";

import Button from "react-bootstrap/Button";

import ReactModal from "react-modal";

const AddTransaction = (props) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModalHandler = () => {
    setModalOpen(true);
  };

  const closeModalHandler = () => {
    setModalOpen(false);
  };
  return (
    <ReactModal isOpen={props.isModalOpen}>
      <Button onClick={closeModalHandler}>Close</Button>
    </ReactModal>
  );
};

export default AddTransaction;
