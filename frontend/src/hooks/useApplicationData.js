import { useReducer } from "react";

const initialState = {
  openModal: false,
  selectedPhoto: null,
  favouritePhotos: [],
};

const ACTIONS = {
  TOGGLE_MODAL: "TOGGLE_MODAL",
  SET_SELECTED_PHOTO: "SET_SELECTED_PHOTO",
  TOGGLE_FAVOURITE: "TOGGLE_FAVOURITE",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.TOGGLE_MODAL:
      return {
        ...state,
        openModal: !state.openModal,
        selectedPhoto: action.payload
      };
    case ACTIONS.SET_SELECTED_PHOTO:
      return {
        ...state,
        selectedPhoto: action.payload,
      };
    case ACTIONS.TOGGLE_FAVOURITE:
      const photoId = action.payload;
      if (state.favouritePhotos.includes(photoId)) {
        return {
          ...state,
          favouritePhotos: state.favouritePhotos.filter((id) => id !== photoId),
        };
      } else {
        return {
          ...state,
          favouritePhotos: [...state.favouritePhotos, photoId],
        };
      }

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

function useApplicationData() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const hasFavourites = state.favouritePhotos.length > 0;

  const toggleFavourite = (photoId) => {
    dispatch({ type: ACTIONS.TOGGLE_FAVOURITE, payload: { photoId } });
  };

  const isFavourite = (photoId) => {
    return state.favouritePhotos.includes(photoId);
  };

  const toggleModal = (photoData) => {
    dispatch({ type: ACTIONS.TOGGLE_MODAL });
    dispatch({ type: ACTIONS.SET_SELECTED_PHOTO, payload: photoData });
  };

  const closeModal = () => {
    dispatch({ type: ACTIONS.TOGGLE_MODAL });
  };

  return {
    state,
    toggleFavourite,
    isFavourite,
    hasFavourites,
    toggleModal,
    closeModal,
  };
}

export default useApplicationData;
