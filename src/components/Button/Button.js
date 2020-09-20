import React, {Component} from "react";
import PropTypes from "prop-types";

class Button extends Component {
  static propTypes = {
    onLoadMore: PropTypes.func,
  };

  render() {
    return (
      <button type="button" onClick={this.props.onLoadMore}>Load more</button>
    )
  }
}

Button.propTypes = {
  onLoadMore: PropTypes.func,
}

export default Button;