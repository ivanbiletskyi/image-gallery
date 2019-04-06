import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./styles/RateSelector.css";

export default class RateSelector extends Component {
  static propTypes = {
    currentRate: PropTypes.number,
    onRated: PropTypes.func.isRequired,
  };

  state = { selectedRate: this.props.currentRate || 0, isRateChanged: false };
  handleSelect = ({ target: { value } }) => {
    this.setState({ selectedRate: value, isRateChanged: true });
  };
  handleRateButtonClick = () => {
    this.props.onRated(this.state.selectedRate);
    this.setState({ isRateChanged: false });
  };

  render() {
    const { selectedRate, isRateChanged } = this.state;
    let rateVariants = [...Array(5)].map((_value, index) => ({
      value: index + 1,
      description: [...Array(index + 1)].map(() => "⭐").join(""),
    })); //create variants with values from 1 to 5
    if (!selectedRate)
      rateVariants = [
        { value: 0, description: "Rate this image:" },
        ...rateVariants,
      ];
    return (
      <div className={styles.container}>
        <div className={styles.selector_container}>
          <span className={styles.title}>Rate:</span>
          <select
            onChange={this.handleSelect}
            value={selectedRate}
            className={styles.selector}
          >
            {rateVariants.map(rateVariant => (
              <option key={rateVariant.value} value={rateVariant.value}>
                {rateVariant.description}
              </option>
            ))}
          </select>
        </div>
        {isRateChanged && (
          <button
            type="button"
            onClick={this.handleRateButtonClick}
            className={styles.rate_button}
          >
            Rate
          </button>
        )}
      </div>
    );
  }
}
