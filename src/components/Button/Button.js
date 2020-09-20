import React, {Component} from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";

class Button extends Component {
  static propTypes = {
    onLoadMore: PropTypes.func,
  };

  render() {
    return (
      <button className={styles["Button"]} type="button" onClick={this.props.onLoadMore}>Load more</button>
    )
  }
}

Button.propTypes = {
  onLoadMore: PropTypes.func,
}

export default Button;