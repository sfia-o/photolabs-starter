import React from "react";
import { useState } from "react";
import TopNavigationBar from "./../components/TopNavigationBar";
import PhotoList from "./../components/PhotoList";
import PhotoDetailsModal from "./../routes/PhotoDetailsModal";

import "../styles/HomeRoute.scss";

const HomeRoute = () => {
  const [favourites, setFavourites] = useState([]);
  const hasFavourites = favourites.length > 0;
  const [open, setOpen] = useState(false);

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

  // Function to open the modal
  const openModal = () => {
    setOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setOpen(false);
  };

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
