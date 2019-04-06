import { combineReducers } from "redux";
import Actions from "../constants/actionTypes";

const defaultImages = {
  items: [],
  isLoading: false,
  isError: false,
  error: null,
};

const imagesReducer = (images = defaultImages, action) => {
  switch (action.type) {
    case Actions.GET_IMAGES_REQUEST:
      return { ...defaultImages, isLoading: true };
    case Actions.GET_IMAGES_SUCCESS: {
      return {
        ...defaultImages,
        items: action.images,
        isLoading: false,
        isError: false,
        error: null,
      };
    }
    case Actions.GET_IMAGES_FAILURE: {
      return { ...defaultImages, isError: true, error: action.error };
    }
    case Actions.SET_IMAGE_RATE_REQUEST: {
      return { ...images, isLoading: true, isError: false, error: null };
    }
    case Actions.SET_IMAGE_RATE_SUCCESS: {
      return {
        ...images,
        items: images.items.map(image => imageReducer(image, action)),
        isLoading: false,
        isError: false,
        error: null,
      };
    }
    case Actions.SET_IMAGE_RATE_FAILURE: {
      return {
        ...images,
        isLoading: false,
        isError: true,
        error: action.error,
      };
    }
    default:
      return images;
  }
};

function imageReducer(image = {}, action) {
  switch (action.type) {
    case Actions.SET_IMAGE_RATE_SUCCESS:
      return image.id === action.imageId
        ? { ...image, rate: action.rate }
        : image;
    default:
      return image;
  }
}

export default combineReducers({
  images: imagesReducer,
});
