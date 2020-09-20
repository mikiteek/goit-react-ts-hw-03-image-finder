import React, {Component} from "react";
import PropTypes from "prop-types";
import styles from "./ImageGallery.module.css";

class ImageGallery extends Component {


  render() {
    return (
      <ul className={styles["ImageGallery"]}>
        {this.props.children}
      </ul>
    );
  }
}

export default ImageGallery;