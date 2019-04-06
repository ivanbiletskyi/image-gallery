import styles from "./styles/ImageThumbnail.css";
import React, { Component } from "react";
import PropTypes from "prop-types";

class ImageThumbnail extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    rate: PropTypes.number,
    onClick: PropTypes.func.isRequired,
  };

  handleClick = e => {
    e.preventDefault();
    this.props.onClick(this.props.id);
  };

  render() {
    const { title, date, rate, src } = this.props;
    return (
      <div className={styles.thumbnail} onClick={this.handleClick}>
        <div className={styles.title_block}>
          <h3>{title}</h3>
        </div>
        <img alt={title} src={src} className={styles.image} />
        <div className={styles.info_block}>
          <div className={styles.date_block}>
            {new Date(date).toLocaleDateString()}
          </div>
          <div className={styles.rate_block}>
            {rate && (
              <span>
                <span role="img" aria-label="star">
                  ⭐
                </span>
                {rate}
              </span>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default ImageThumbnail;
