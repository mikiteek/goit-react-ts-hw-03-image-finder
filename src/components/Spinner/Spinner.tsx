import React, {Component} from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

class Spinner extends Component {
  render() {
    return(
      <Loader
        type="ThreeDots"
        color="#00BFFF"
        height={80}
        width={80}
        timeout={3000} //3 secs
      />
    );
  }
}

export default Spinner;