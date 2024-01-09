import React, { useState } from "react";
import Modal from "react-modal";
import "./styles/modal.css";
// import crossimage from "../../../assets/images/X.svg";

//Modal to alert the user if there is more than 10% change in token's balance in 12 hours
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
