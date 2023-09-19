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
  hasFavourites,
  onTopicSelect,
}) => {
  return (
    <div className="home-route">
      <TopNavigationBar
        topics={topics}
        hasFavourites={hasFavourites}
        onTopicSelect={onTopicSelect}
        className="top-nav-bar"
      />
      <PhotoList
        photos={photos}
        favouritePhotos={favouritePhotos}
        toggleFavourite={toggleFavourite}
        toggleModal={toggleModal}
      />
    </div>
  );
};

export default HomeRoute;
