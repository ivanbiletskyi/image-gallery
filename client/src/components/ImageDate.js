import React from "react";
import PropTypes from "prop-types";

function ImageDate(props) {
  return (
    <div>
      <h3>Publication date:</h3>
      {new Date(props.date).toLocaleDateString()}
    </div>
  );
}

ImageDate.propTypes = {
  date: PropTypes.string.isRequired,
};

export default ImageDate;
