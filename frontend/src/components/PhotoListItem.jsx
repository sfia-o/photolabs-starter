import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  /* Insert React */
  const { data } = props;
  return(
  <div className='photo-list__item'>
    <img className="photo-list__image" src={data.imageSource} alt="photo" />
    <div className="photo-list__user-details">
      <img className="photo-list__user-profile" src={data.profile} alt="photographer-profile-pic" />
      <div className="photo-list__user-info">
      <p>{data.username}</p>
      <p className="photo-list__user-location">{data.location.city}, {data.location.country}</p>
      </div>
    </div>
  </div>

  )
};

export default PhotoListItem;
