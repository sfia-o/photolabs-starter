import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = ({location, urls, user, toggleFavourite, isFavourite}) => {

  return(
  <div className='photo-list__item'>
    <PhotoFavButton toggleFavourite={toggleFavourite} isFavourite={isFavourite}/>
    <img className="photo-list__image" src={urls.full} alt="photo" />
    <div className="photo-list__user-details">
      <img className="photo-list__user-profile" src={user.profile} alt="photographer-profile-pic" />
      <div className="photo-list__user-info">
      <p>{user.name}</p>
      <p className="photo-list__user-location">{location.city}, {location.country}</p>
      </div>
    </div>
  </div>

  )
};

export default PhotoListItem;
