import React, {Component} from "react";


class ImageGalleryItem extends Component {
  render() {
    const {webURL, largeURL} = this.props;
    return (
      <li className="ImageGalleryItem">
        <img src={webURL} alt="image-photo" className="ImageGalleryItem-image" />
      </li>
    )
  }
}

export default ImageGalleryItem;