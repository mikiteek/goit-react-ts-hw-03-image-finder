import React, {Component} from "react";
import styles from "./Searchbar.module.css";

interface propTypes {
  onSubmit: any,
}

interface stateTypes {
  inputValue: string,
}

class Searchbar extends Component<propTypes, stateTypes> {
  state = {
    inputValue: "",
  }

  private handleChange = ({target}: {target: any}): void => {
    this.setState({inputValue: target.value})
  }

  private handleSubmit = (event: any): void => {
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