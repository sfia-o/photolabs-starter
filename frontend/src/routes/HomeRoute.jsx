import React from "react";
import { useState } from "react";
import TopNavigationBar from "./../components/TopNavigationBar";
import PhotoList from "./../components/PhotoList";

import "../styles/HomeRoute.scss";

const HomeRoute = () => {
  const [favourites, setFavourites] = useState([]);

  const toggleFavourite = (id) => {
    if (favourites.includes(id)) {
      setFavourites(favourites.filter((photoId) => photoId !== id));
      console.log(favourites);
    } else {
      setFavourites([...favourites, id]);
    }
  };

  const isFavourite = (id) => {
    return favourites.includes(id);
  };

  return (
    <div className="home-route">
      <TopNavigationBar favourites={favourites} className="top-nav-bar" />
      <PhotoList
        favourites={favourites}
        toggleFavourite={toggleFavourite}
        isFavourite={isFavourite}
      />
    </div>
  );
};

export default HomeRoute;
