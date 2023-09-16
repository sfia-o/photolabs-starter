import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({closeModal}) => {
  const handleClick = () => {
    closeModal();
  }


  return (
    <div className="photo-details-modal">
      <button onClick={handleClick} className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" />
      </button>
    </div>
  )
};

export default PhotoDetailsModal;
