import React from "react";
import { useState, useEffect } from "react";
import photoData from "../mocks/photos";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({toggleFavourite, isFavourite}) => {

  return (
    <ul className="photo-list">
      {photoData.map((photo) => (
        <PhotoListItem
          key={photo.id}
          location={photo.location}
          urls={photo.urls}
          user={photo.user}
          toggleFavourite={toggleFavourite}
          isFavourite={isFavourite(photo.id)}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
