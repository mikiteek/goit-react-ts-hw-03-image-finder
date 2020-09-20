import React, {Component} from "react";
import styles from "./ImageGalleryItem.module.css";

class ImageGalleryItem extends Component {
  render() {
    const {webURL, largeURL} = this.props;
    return (
      <li className={styles["ImageGalleryItem"]}>
        <img src={webURL} alt="image-photo" className={styles["ImageGalleryItem-image"]} />
      </li>
    )
  }
}

export default ImageGalleryItem;