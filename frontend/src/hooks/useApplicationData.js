import { useReducer } from "react";

const initialState = {
  openModal: false,
  selectedPhoto: null,
  favouritePhotos: []
};

const ACTIONS = {
  TOGGLE_MODAL: "TOGGLE_MODAL",
  SET_SELECTED_PHOTO: "SET_SELECTED_PHOTO",
  TOGGLE_FAVOURITE: "TOGGLE_FAVOURITE"
};

function reducer(state, action) {
  
}




//   const toggleFavourite = (photoId) => {
//     if (favouritePhotos.includes(photoId)) {
//       setFavouritePhotos(favouritePhotos.filter((id) => id !== photoId));
//     } else {
//       setFavouritePhotos([...favouritePhotos, photoId]);
//     }
//   };

//   const isFavourite = (photoId) => {
//     return favouritePhotos.includes(photoId);
//   };

//   const hasFavourites = favouritePhotos.length > 0;

//   // Function to open the modal
//   const toggleModal = (photoData) => {
//     setOpenModal(!openModal);
//     setSelectedPhoto(photoData);
//   };

//   const closeModal = () => {
//     setOpenModal(false);
//   };

//   return {
//     state: { openModal, selectedPhoto, favouritePhotos },
//     toggleFavourite,
//     isFavourite,
//     hasFavourites,
//     toggleModal,
//     closeModal,
//   };
// }

export default useApplicationData;
