import React from "react";
import useApplicationData from "hooks/useApplicationData";
import HomeRoute from "./routes/HomeRoute";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";

import "./App.scss";

const App = () => {
  const {
    state: { openModal, selectedPhoto, favouritePhotos, photos, topics },
    toggleFavourite,
    toggleModal,
    closeModal,
    onTopicSelect,
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        onTopicSelect={onTopicSelect}
        toggleModal={toggleModal}
        favouritePhotos={favouritePhotos}
        toggleFavourite={toggleFavourite}
        hasFavourites={favouritePhotos.length > 0}
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
