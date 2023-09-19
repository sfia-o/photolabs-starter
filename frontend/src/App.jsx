import React from "react";
import { useState, useEffect, useReducer } from "react";
import axios from 'axios';
import useApplicationData from "hooks/useApplicationData";
import HomeRoute from "./routes/HomeRoute";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";

import "./App.scss";

const App = () => {
  const {
    state: { openModal, selectedPhoto, favouritePhotos, photos, topics },
    toggleFavourite,
    isFavourite,
    hasFavourites,
    toggleModal,
    closeModal,
  } = useApplicationData();


  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        toggleModal={toggleModal}
        favouritePhotos={favouritePhotos}
        toggleFavourite={toggleFavourite}
        isFavourite={isFavourite}
        hasFavourites={hasFavourites}
      />
      {openModal && (
        <PhotoDetailsModal
          photos={photos}
          photoData={selectedPhoto}
          toggleModal={toggleModal}
          closeModal={closeModal}
          favouritePhotos={favouritePhotos}
          toggleFavourite={toggleFavourite}
        />
      )}
    </div>
  );
};

export default App;
