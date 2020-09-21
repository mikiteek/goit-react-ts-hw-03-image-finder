import React, {Component} from "react";
import PropTypes from "prop-types";
import styles from "./Modal.module.css";

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.closeModalByEscape);
    window.addEventListener("click", this.closeModalByClick);
  }
  closeModalByEscape = ({code}) => {
    if (code === "Escape") {
      this.props.onCloseModal(null);
    }
  }
  closeModalByClick = ({target}) => {
    if (target.className.includes("Overlay")) {
      this.props.onCloseModal(null);
    }
  }

 componentWillUnmount() {
    window.removeEventListener("click", this.closeModalByClick);
    window.removeEventListener("keydown", this.closeModalByEscape);
 }

  render() {
    return (
      <div className={styles["Overlay"]}>
        <div className={styles["Modal"]}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Modal;
