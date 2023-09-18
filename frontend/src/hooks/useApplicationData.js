import { useState } from "react";

function useApplicationData() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [favouritePhotos, setFavouritePhotos] = useState([]);

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

  return {
    state: { openModal, selectedPhoto, favouritePhotos },
    toggleFavourite,
    isFavourite,
    hasFavourites,
    toggleModal,
    closeModal,
  };
}

export default useApplicationData;
