import React from "react";
import { useState, useEffect } from "react";
import photoData from "../mocks/photos";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = () => {

  return (
    <ul className="photo-list">
      {photoData.map((photo) => (
        <PhotoListItem
          key={photo.id}
          location={photo.location}
          urls={photo.urls}
          user={photo.user}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
