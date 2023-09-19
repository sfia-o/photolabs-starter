import React from "react";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoList from "../components/PhotoList";
import PhotoFavButton from "../components/PhotoFavButton";

const PhotoDetailsModal = ({
  closeModal,
  photoData,
  favouritePhotos,
  toggleFavourite,
}) => {
  const { id, urls, location, user, similar_photos } = photoData;
  const { name, profile } = user;
  const similarPhotos = Object.values(similar_photos);

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
        <PhotoFavButton
          id={id}
          toggleFavourite={toggleFavourite}
          favouritePhotos={favouritePhotos}
        />
        <img
          className="photo-details-modal__image"
          src={urls.full}
          alt="photographer-profile-pic"
        />

        <div className="photo-details-modal__header photo-details-modal__photographer-details">
          <img
            className="photo-list__user-profile"
            src={profile}
            alt="photographer-profile-pic"
          />
          <div className="photo-details-modal__photographer-details">
            <p>{name}</p>
            <p className="photo-list__user-location">
              {location.city}, {location.country}
            </p>
          </div>
        </div>
        <div className="photo-details-modal__images">
          <h3>Similar Photos</h3>
          <PhotoList
            photos={similarPhotos}
            toggleFavourite={toggleFavourite}
            favouritePhotos={favouritePhotos}
            className="photo-details-modal__images"
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
