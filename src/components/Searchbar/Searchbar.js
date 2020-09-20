import React, {Component} from "react";
import PropTypes from "prop-types";

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
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
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