import React from "react";
import { useState } from "react";
import TopNavigationBar from "./../components/TopNavigationBar";
import PhotoList from "./../components/PhotoList";
import PhotoDetailsModal from "./../routes/PhotoDetailsModal";

import "../styles/HomeRoute.scss";

const HomeRoute = () => {


  return (
    <div className="home-route">
      <TopNavigationBar hasFavourites={hasFavourites} className="top-nav-bar" />
      <PhotoList
        favourites={favourites}
        toggleFavourite={toggleFavourite}
        isFavourite={isFavourite}
        openModal={openModal}
      />
      {open && <PhotoDetailsModal toggleFavourite={toggleFavourite} isFavourite={isFavourite} closeModal={closeModal} />}
    </div>
  );
};

export default HomeRoute;
