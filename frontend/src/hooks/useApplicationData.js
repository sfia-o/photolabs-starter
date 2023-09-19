import { useReducer, useEffect } from "react";
import axios from 'axios';

const initialState = {
  openModal: false,
  selectedPhoto: null,
  favouritePhotos: [],
  photos: [],
  topics: []
};

const ACTIONS = {
  TOGGLE_MODAL: "TOGGLE_MODAL",
  SET_SELECTED_PHOTO: "SET_SELECTED_PHOTO",
  TOGGLE_FAVOURITE: "TOGGLE_FAVOURITE",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPICS_DATA: "SET_TOPICS_DATA"
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.TOGGLE_MODAL:
      return {
        ...state,
        openModal: !state.openModal,
        selectedPhoto: action.payload,
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
    case ACTIONS.SET_PHOTO_DATA:
      return { ...state, photos: action.payload };
    case ACTIONS.SET_TOPICS_DATA:
      return { ...state, topics: action.payload };

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
    dispatch({ type: ACTIONS.TOGGLE_FAVOURITE, payload: photoId });
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

  useEffect(() => {
    axios.get('/api/photos')
    .then((res) => {
      dispatch({type: ACTIONS.SET_PHOTO_DATA, payload: res.data})
    })
  }, []);

  useEffect(() => {
    axios.get('/api/topics')
    .then((res) => {
      dispatch({type: ACTIONS.SET_TOPICS_DATA, payload: res.data})
    })
  })

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
