import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ hasFavourites}) => {
  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={!!hasFavourites} selected={true} style={{width: "10px"}}/>
    </div>
  ) 
};

export default FavBadge;