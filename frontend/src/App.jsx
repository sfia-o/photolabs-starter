import React from "react";
import { useState } from "react";
import useApplicationData from "hooks/useApplicationData";
import HomeRoute from "./routes/HomeRoute";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";
import photos from "./mocks/photos";
import topics from "./mocks/topics";

import "./App.scss";

const App = () => {
  const {
    state: { openModal, selectedPhoto, favouritePhotos },
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
