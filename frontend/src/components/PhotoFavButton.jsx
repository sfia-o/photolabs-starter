import React from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton({ id, toggleFavourite, favouritePhotos }) {
  const handleClick = () => {
    toggleFavourite(id);
  };

  const selected = favouritePhotos.includes(id);

  return (
    <div onClick={handleClick} className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={selected} />
      </div>
    </div>
  );
}

export default PhotoFavButton;
