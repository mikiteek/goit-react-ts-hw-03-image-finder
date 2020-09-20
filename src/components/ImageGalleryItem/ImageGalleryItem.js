import React, {Component} from "react";
import PropTypes from "prop-types";
import styles from "./ImageGalleryItem.module.css";

class ImageGalleryItem extends Component {
  static propTypes = {
    webURL: PropTypes.string,
  }
  render() {
    const {webURL} = this.props;
    return (
      <li className={styles["ImageGalleryItem"]}>
        <img src={webURL} alt="image-photo" className={styles["ImageGalleryItem-image"]} />
      </li>
    )
  }
}

export default ImageGalleryItem;