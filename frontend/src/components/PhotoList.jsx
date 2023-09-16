import React from "react";
import { useState, useEffect } from "react";
import photoData from "../mocks/photos";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({ toggleFavourite, isFavourite, openModal }) => {
  return (
    <ul className="photo-list">
      {photoData.map((photo) => (
        <PhotoListItem
          key={photo.id}
          location={photo.location}
          urls={photo.urls}
          user={photo.user}
          toggleFavourite={toggleFavourite}
          isFavourite={isFavourite}
          openModal={openModal}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
