import React, {useState} from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({
  id,
  location,
  urls,
  user,
  toggleFavourite,
  isFavourite,
  openModal
}) => {
  

  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handlePhotoClick = () => {
    console.log("handlePhotoClick invoked with data:", id, location, urls, user);
    openModal();
    setSelectedPhoto({id, location, urls, user});
  }

  return (
    <div  className="photo-list__item">
      <PhotoFavButton
        toggleFavourite={toggleFavourite}
        isFavourite={isFavourite}
      />
      <img onClick={() => handlePhotoClick()} className="photo-list__image" src={urls.full} alt="photo" />
      <div className="photo-list__user-details">
        <img
          className="photo-list__user-profile"
          src={user.profile}
          alt="photographer-profile-pic"
        />
        <div className="photo-list__user-info">
          <p>{user.name}</p>
          <p className="photo-list__user-location">
            {location.city}, {location.country}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
