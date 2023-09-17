import React from "react";
import { useState } from "react";
import HomeRoute from "./routes/HomeRoute";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";
import photos from "mocks/photos";
import topics from "mocks/topics";

import "./App.scss";

const App = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [favouritePhotos, setFavouritePhotos] = useState([]);

  const toggleFavourite = (photoId) => {
    if (favouritePhotos.includes(photoId)) {
      setFavourites(favouritePhotos.filter((photoId) => photoId !== id));
    } else {
      setFavourites([...favouritePhotos, id]);
    }
  };

  const isFavourite = (photoId) => {
    return favouritePhotos.includes(photoId);
  };

  // Function to open the modal
  const toggleModal = () => {
    setOpenModal(!openModal);
    setSelectedPhoto(photoData);
  };

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        toggleModal={toggleModal}
        favouritePhotos={favouritePhotos}
        toggleFavourite={toggleFavourite}
      />
      {openModal && (
        <PhotoDetailsModal
          photoData={selectedPhoto}
          toggleModal={toggleModal}
          favouritePhotos={favouritePhotos}
          toggleFavourite={toggleFavourite}
        />
      )}
    </div>
  );
};

export default App;
