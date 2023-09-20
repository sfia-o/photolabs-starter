import { useReducer, useEffect } from "react";
import axios from "axios";

const initialState = {
  openModal: false,
  selectedPhoto: null,
  favouritePhotos: [],
  photos: [],
  topics: [],
  photosByTopic: [],
};

const ACTIONS = {
  TOGGLE_MODAL: "TOGGLE_MODAL",
  SET_SELECTED_PHOTO: "SET_SELECTED_PHOTO",
  FAV_PHOTO_ADDED: "FAV_PHOTO_ADDED",
  FAV_PHOTO_REMOVED: "FAV_PHOTO_REMOVED",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPICS_DATA: "SET_TOPICS_DATA",
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
    case ACTIONS.FAV_PHOTO_ADDED:
      return {
        ...state,
        favouritePhotos: [...state.favouritePhotos, action.payload],
      };
    case ACTIONS.FAV_PHOTO_REMOVED:
      return { ...state, favouritePhotos: [...action.payload] };

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

  const toggleFavourite = (photoId) => {
    if (state.favouritePhotos.includes(photoId)) {
      const copyOfFavourites = [...state.favouritePhotos].filter(
        (favPhotoId) => favPhotoId !== photoId
      );
      // setState({ ...state, favourites: copyOfFavourites });
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: copyOfFavourites });
      return;
    }
    // setState({ ...state, favourites: [...state.favourites, photoId] });
    dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: photoId });
  };

  const toggleModal = (photoData) => {
    window.scrollTo(0, 0);
    dispatch({ type: ACTIONS.TOGGLE_MODAL });
    dispatch({ type: ACTIONS.SET_SELECTED_PHOTO, payload: photoData });
  };

  const closeModal = () => {
    dispatch({ type: ACTIONS.TOGGLE_MODAL });
  };

  const onTopicSelect = (id) => {
    axios.get(`/api/topics/photos/${id}`).then((res) => {
      dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: res.data });
    });
  };

  useEffect(() => {
    axios.get("/api/photos").then((res) => {
      dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: res.data });
    });
  }, []);

  useEffect(() => {
    axios.get("/api/topics").then((res) => {
      dispatch({ type: ACTIONS.SET_TOPICS_DATA, payload: res.data });
    });
  }, []);

  return {
    state,
    toggleFavourite,
    toggleModal,
    closeModal,
    onTopicSelect,
  };
}

export default useApplicationData;
