import React, {Component} from 'react';
import Searchbar from "./components/Searchbar/Searchbar";
import fetchImages from "./services/image-api";

class App extends Component {
  state = {
    images: [],
    searchQuery: "",
    page: 1,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;

    if (prevQuery !== nextQuery) {
      this.fetchImages();
    }
  };

  handleSearchFormSubmit = query => {
    this.setState({searchQuery: query, page: 1, images: []})
  }

  fetchImages = () => {
    const {searchQuery, page} = this.state;
    fetchImages(searchQuery, page)
      .then(images => this.setState(prevState => ({images: [...prevState.images, ...images], page: prevState.page + 1})))
      .catch(error => this.setState({error}));
  }


  render() {
    return (
      <Searchbar onSubmit={this.handleSearchFormSubmit}/>
    )
  }

}

export default App;
