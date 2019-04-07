import styles from "./styles/Gallery.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { getImages } from "../redux/actions/rootActions";
import Spinner from "react-md-spinner";
import ImageThumbnail from "./ImageThumbnail";
import FullImageViewer from "./FullImageViewer";
import inModal from "./inModal";
const FullImageViewerInModal = inModal(FullImageViewer);
export class Gallery extends Component {
  state = {
    isImageViewerShown: false,
    shownImage: null,
  };
  componentDidMount() {
    this.props.getImages();
  }

  handleThumbnailClick = imageId => {
    this.setState({
      isImageViewerShown: true,
      shownImage: this.props.images.find(image => image.id === imageId),
    });
  };

  handleModalClose = () => {
    this.setState({ isImageViewerShown: false, shownImage: null });
  };

  render() {
    const { images, isLoading, isError, error } = this.props;
    const { isImageViewerShown, shownImage } = this.state;
    return (
      <div className={styles.gallery}>
        {!isLoading &&
          !isError &&
          images &&
          images.map(image => (
            <ImageThumbnail
              key={image.id}
              id={image.id}
              title={image.title}
              date={image.date}
              rate={image.rate}
              src={image.url}
              onClick={this.handleThumbnailClick}
            />
          ))}
        {isLoading && <Spinner />}
        {isError && <div className={styles.error_block}>{error.message}</div>}
        {isImageViewerShown && (
          <FullImageViewerInModal
            isOpened={isImageViewerShown}
            onClose={this.handleModalClose}
            {...shownImage}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  images: state.images.items,
  isLoading: state.images.isLoading,
  isError: state.images.isError,
  error: state.images.error,
});

const mapDispatchToProps = {
  getImages,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gallery);
