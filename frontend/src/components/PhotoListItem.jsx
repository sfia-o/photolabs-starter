import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  /* Insert React */
  const { data } = props;
  return(
  <div className='PhotoListItem'>
    <img src={data.imageSource} alt="photo" />
      <img src={data.profile} alt="photographer-profile-pic" />
      <p>{data.username}</p>
      <p>{data.location.city}, {data.location.country}</p>
  </div>

  )
};

export default PhotoListItem;
