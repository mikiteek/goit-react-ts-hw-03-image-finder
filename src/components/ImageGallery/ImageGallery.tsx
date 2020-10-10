import React, {Component} from "react";
import PropTypes from "prop-types";
import styles from "./ImageGallery.module.css";

interface propTypes {
  children: any,
}

class ImageGallery extends Component<propTypes> {
  render() {
    return (
      <ul className={styles["ImageGallery"]}>
        {this.props.children}
      </ul>
    );
  }
}

export default ImageGallery;