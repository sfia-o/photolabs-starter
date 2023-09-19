import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({
  photos,
  toggleFavourite,
  favouritePhotos,
  toggleModal,
}) => {
  return (
    <ul className="photo-list">
      {photos.map((photoData) => (
        <PhotoListItem
          photoData={photoData}
          key={photoData.id}
          id={photoData.id}
          location={photoData.location}
          urls={photoData.urls}
          user={photoData.user}
          toggleFavourite={toggleFavourite}
          toggleModal={toggleModal}
          favouritePhotos={favouritePhotos}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
