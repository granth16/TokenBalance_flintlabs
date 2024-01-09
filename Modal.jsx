import React, { useState } from "react";
import Modal from "react-modal";
import "./styles/modal.css";
// import crossimage from "../../../assets/images/X.svg";

const CustomModal = ({ isOpen, onRequestClose, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="Overlay"
      className="Modal"
    >
      <div>
        <button className="CloseButton" onClick={onRequestClose}>
          {/* <img src={crossimage} alt="close" /> */}
        </button>
        {children}
      </div>
    </Modal>
  );
};

export default CustomModal;
