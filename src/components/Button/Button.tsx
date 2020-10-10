import React, {Component} from "react";
import styles from "./Button.module.css";

interface propTypes {
  onLoadMore: any,
}

class Button extends Component<propTypes> {
  render() {
    return (
      <button className={styles["Button"]} type="button" onClick={this.props.onLoadMore}>Load more</button>
    )
  }
}

export default Button;