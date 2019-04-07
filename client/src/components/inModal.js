import React from "react";
import ReactDOM from "react-dom";
import classnames from "classnames";
import styles from "./styles/inModal.css";

const modalRoot = document.getElementById("modal-root");

export default function inModal(WrappedComponent) {
  return class Modal extends React.Component {
    modalNode = document.createElement("div");

    componentDidMount() {
      modalRoot.appendChild(this.modalNode);
    }

    componentWillUnmount() {
      modalRoot.removeChild(this.modalNode);
    }

    modalContentClick = e => {
      e.stopPropagation();
    };

    render() {
      const { isOpened, onClose, ...passThroughProps } = this.props;
      return ReactDOM.createPortal(
        <div
          className={classnames(styles.modal, isOpened && styles.opened)}
          onClick={onClose}
        >
          <div className={styles.content} onClick={this.modalContentClick}>
            <WrappedComponent {...passThroughProps} />
          </div>
        </div>,
        this.modalNode
      );
    }
  };
}
