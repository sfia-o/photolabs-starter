import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {

  const [liked, setLike] = useState(false)

  const handleClick =useCallback(() => {
    setLike((prev) => !prev);
  }, []); 

  return (
    
    <div onClick={handleClick} className="photo-list__fav-icon" >
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={liked} />
      </div>
    </div>
    
  );
}

export default PhotoFavButton;