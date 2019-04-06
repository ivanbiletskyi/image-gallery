// Enum with all available action types. Usefull with IDE/code-editor autocomplete to avoid typographic mistakes and to see list of all actions that you have

const Actions = {
  GET_IMAGES_REQUEST: "GET_IMAGES_REQUEST",
  GET_IMAGES_SUCCESS: "GET_IMAGES_SUCCESS",
  GET_IMAGES_FAILURE: "GET_IMAGES_FAILURE",
  SET_IMAGE_RATE_REQUEST: "SET_IMAGE_RATE_REQUEST",
  SET_IMAGE_RATE_SUCCESS: "SET_IMAGE_RATE_SUCCESS",
  SET_IMAGE_RATE_FAILURE: "SET_IMAGE_RATE_FAILURE",
};
export default Object.freeze(Actions);
