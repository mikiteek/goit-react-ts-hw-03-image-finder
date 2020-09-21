import React, {Component} from "react";
import PropTypes from "prop-types";
import styles from "./ImageGalleryItem.module.css";

class ImageGalleryItem extends Component {
  static propTypes = {
    webURL: PropTypes.string,
    onShowModal: PropTypes.func,
  }
  getLargeImageUrl = () => {
    this.props.onShowModal(this.props.lagreUrl);
  }
  render() {
    const {webURL} = this.props;
    return (
      <li className={styles["ImageGalleryItem"]}>
        <img src={webURL} alt="image-photo" className={styles["ImageGalleryItem-image"]} onClick={this.getLargeImageUrl} />
      </li>
    )
  }
}

export default ImageGalleryItem;