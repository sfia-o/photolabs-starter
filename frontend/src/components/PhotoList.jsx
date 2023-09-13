import React from "react";
import { useState } from 'react';
import {photos} from './mock/photos'
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const [photo, setPhotos] = useState(photos);

const PhotoList = () => {
  return (
    <ul className="photo-list">
      {photos.map((photo) => (
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
