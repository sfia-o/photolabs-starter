import React from "react";
import TopNavigationBar from "./../components/TopNavigationBar";
import PhotoList from "./../components/PhotoList";
import "../styles/HomeRoute.scss";

const HomeRoute = ({
  photos,
  topics,
  toggleModal,
  favouritePhotos,
  toggleFavourite,
  isFavourite,
  hasFavourites,
}) => {
  return (
    <div className="home-route">
      <TopNavigationBar
        topics={topics}
        hasFavourites={hasFavourites}
        className="top-nav-bar"
      />
      <PhotoList
        photos={photos}
        favouritePhotos={favouritePhotos}
        toggleFavourite={toggleFavourite}
        isFavourite={isFavourite}
        toggleModal={toggleModal}
      />
    </div>
  );
};

export default HomeRoute;
