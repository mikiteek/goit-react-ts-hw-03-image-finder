import React, {Component} from "react";
import styles from "./Modal.module.css";

interface propTypes {
  children: any,
  onCloseModal: any,
}

class Modal extends Component<propTypes> {
  componentDidMount() {
    window.addEventListener("keydown", this.closeModalByEscape);
    window.addEventListener("click", this.closeModalByClick);
  }

  private closeModalByEscape = ({code}: {code: string}): void => {
    if (code === "Escape") {
      this.props.onCloseModal(null);
    }
  }
  private closeModalByClick = ({target}: {target: any}): void => {
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
