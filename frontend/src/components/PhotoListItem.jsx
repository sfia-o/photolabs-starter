import React, { useState } from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({
  photoData,
  toggleFavourite,
  isFavourite,
  toggleModal,
}) => {
 
  const { urls, location, user } = photoData;
  const { username, profile } = user;

  return (
    <div className="photo-list__item">
      <PhotoFavButton
        toggleFavourite={() => toggleFavourite(photoData.id)}
        isFavourite={isFavourite}
      />
      <img
        onClick={() => toggleModal(photoData)}
        className="photo-list__image"
        src={urls.full}
        alt="photo"
      />
      <div className="photo-list__user-details">
        <img
          className="photo-list__user-profile"
          src={profile}
          alt="photographer-profile-pic"
        />
        <div className="photo-list__user-info">
          <p>{username}</p>
          <p className="photo-list__user-location">
            {location.city}, {location.country}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
