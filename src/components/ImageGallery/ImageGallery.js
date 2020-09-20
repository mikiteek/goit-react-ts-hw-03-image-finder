import React, {Component} from "react";
import PropTypes from "prop-types";

class ImageGallery extends Component {


  render() {
    return (
      <ul className="ImageGallery">
        {this.props.children}
      </ul>
    );
  }
}

export default ImageGallery;