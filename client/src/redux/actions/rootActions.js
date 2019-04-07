import Actions from "../constants/actionTypes";
const axios = require("axios");

export const getImages = () => dispatch => {
  dispatch({ type: Actions.GET_IMAGES_REQUEST });
  axios.get("/api/images").then(
    response => {
      if (response.status === 200) {
        dispatch({ type: Actions.GET_IMAGES_SUCCESS, images: response.data });
      } else {
        dispatch({
          type: Actions.GET_IMAGES_FAILURE,
          error: { statusCode: response.status, message: response.data },
        });
      }
    },
    error => {
      dispatch({
        type: Actions.GET_IMAGES_FAILURE,
        error: { message: error.message },
      });
    }
  );
};

export const setImageRate = (imageId, rate) => dispatch => {
  rate = +rate;
  dispatch({ type: Actions.SET_IMAGE_RATE_REQUEST });
  axios.put(`/api/image/${imageId}/rate`, { rate }).then(
    response => {
      if (response.status === 200) {
        dispatch({ type: Actions.SET_IMAGE_RATE_SUCCESS, imageId, rate });
      } else {
        dispatch({
          type: Actions.SET_IMAGE_RATE_FAILURE,
          error: { statusCode: response.status, message: response.data },
        });
      }
    },
    error => {
      dispatch({
        type: Actions.SET_IMAGE_RATE_FAILURE,
        error: {
          statusCode: error.response.status,
          message: error.response.data || error.message,
        },
      });
    }
  );
};
