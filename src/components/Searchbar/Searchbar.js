import React, {Component} from "react";
import PropTypes from "prop-types";
import styles from "./Searchbar.module.css";

class Searchbar extends Component {
  state = {
    inputValue: "",
  }
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  }

  handleChange = ({target}) => {
    this.setState({inputValue: target.value})
  }

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.inputValue);
    this.setState({
      inputValue: "",
    });
  };

  render() {
    return(
      <header className={styles["Searchbar"]}>
        <form className={styles["SearchForm"]} onSubmit={this.handleSubmit}>
          <button type="submit" className={styles["SearchForm-button"]}>
            <span className={styles["SearchForm-button-label"]}>Search</span>
          </button>

          <input
            className={styles["SearchForm-input"]}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.inputValue}
            onChange={this.handleChange}
          />
        </form>
      </header>
    )
  }
}



export default Searchbar;