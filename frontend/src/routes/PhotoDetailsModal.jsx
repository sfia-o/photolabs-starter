import React, { useEffect, useState } from "react";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoList from "../components/PhotoList";

const PhotoDetailsModal = ({ closeModal }) => {
  const handleClick = () => {
    closeModal();
  };

  return (
    <div className="photo-details-modal">
      <button
        onClick={handleClick}
        className="photo-details-modal__close-button"
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <PhotoList />
    </div>
  );
};

export default PhotoDetailsModal;
