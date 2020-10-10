import React, {Component} from "react";
import styles from "./ImageGalleryItem.module.css";

interface propTypes {
  webURL: string,
  lagreUrl: string,
  onShowModal: any,
}

class ImageGalleryItem extends Component<propTypes> {
  private getLargeImageUrl = (): void => {
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