import styles from "./styles/FullImageViewer.css";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setImageRate } from "../redux/actions/rootActions";
import RateSelector from "./RateSelector";
import ImageDate from "./ImageDate";

class FullImageViewer extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    rate: PropTypes.number,
  };

  handleImageRated = newRate => {
    this.props.setImageRate(this.props.id, newRate);
  };

  render() {
    const { url, title, description, date, rate } = this.props;
    return (
      <div className={styles.viewer_container}>
        <div className={styles.title_block}>
          <h3>{title}</h3>
        </div>
        <div className={styles.image_container}>
          <img src={url} alt={title} />
          <div className={styles.description_block}>{description}</div>
        </div>
        <div className={styles.info_block}>
          <ImageDate date={date} />
          <RateSelector currentRate={rate} onRated={this.handleImageRated} />
        </div>
      </div>
    );
  }
}

// const mapStateToProps = state => ({});

const mapDispatchToProps = { setImageRate };

export default connect(
  // mapStateToProps,
  null,
  mapDispatchToProps
)(FullImageViewer);
