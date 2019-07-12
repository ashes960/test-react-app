import React from "react";
import Modal from "react-modal";

const ImageModal = props => (
  <Modal
    isOpen={!!props.imageLink}
    onRequestClose={props.handleCloseModal}
    closeTimeoutMS={200}
    className="modal"
  >
    <img src={props.imageLink} className="modal-image" />
  </Modal>
);

export default ImageModal;
