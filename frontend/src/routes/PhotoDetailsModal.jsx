import React, { useEffect, useState } from "react";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoList from "../components/PhotoList";
import PhotoFavButton from "../components/PhotoFavButton";


const PhotoDetailsModal = ({ closeModal, id, location, urls, user, toggleFavourite, isFavourite }) => {
  
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

      <div className="photo-details-modal__images">
        <PhotoFavButton toggleFavourite={toggleFavourite} isFavourite={isFavourite}/>
        <img
          className="photo-details-modal__image"
          src={`${process.env.PUBLIC_URL}/Image-5-Regular.jpg`}
          alt="photographer-profile-pic"
        />

        <div className="photo-details-modal__header photo-details-modal__photographer-details">
          <img
            className="photo-list__user-profile"
            src={`${process.env.PUBLIC_URL}/profile-1.jpg`}
            alt="photographer-profile-pic"
          />
          <div className="photo-details-modal__photographer-details">
          <p>Joe Example</p>
          <p className="photo-list__user-location">Toronto, Canada</p>
        </div>
        </div>
      <div className="photo-details-modal__images">
        <h3>Similar Photos</h3>
        <PhotoList className="photo-details-modal__images" />
      </div>
    </div>
      </div>
  );
};

export default PhotoDetailsModal;
