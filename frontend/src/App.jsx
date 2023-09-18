import React from "react";
import { useState } from "react";
import HomeRoute from "./routes/HomeRoute";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";
import photos from "./mocks/photos";
import topics from "./mocks/topics";

import "./App.scss";

const App = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [favouritePhotos, setFavouritePhotos] = useState([]);

  const similarPhotos = photos.map((photo) => photo.similar_photos);

  const toggleFavourite = (photoId) => {
    if (favouritePhotos.includes(photoId)) {
      setFavouritePhotos(favouritePhotos.filter((id) => id !== photoId));
    } else {
      setFavouritePhotos([...favouritePhotos, photoId]);
    }
  };

  const isFavourite = (photoId) => {
    return favouritePhotos.includes(photoId);
  };

  const hasFavourites = favouritePhotos.length > 0;

  // Function to open the modal
  const toggleModal = (photoData) => {
    setOpenModal(!openModal);
    setSelectedPhoto(photoData);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

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
        similarPhotos = {similarPhotos}
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
