import React, {Component} from 'react';
import Searchbar from "./components/Searchbar/Searchbar";
import fetchImagesService from "./services/image-api";
import Button from "./components/Button/Button";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageGalleryItem from "./components/ImageGalleryItem/ImageGalleryItem";
import styles from "./App.module.css";

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
    fetchImagesService(searchQuery, page)
      .then(images => this.setState(prevState => ({
        images: [...prevState.images, ...images], page: prevState.page + 1
      })))
      .then(res => {
      window.scrollTo({
        top: document.documentElement.offsetHeight,
        behavior: 'smooth',
      });
    })
      .catch(error => this.setState({error}));
  }



  render() {
    const images = this.state.images;
    return (
      <div className={styles.App}>
        <Searchbar onSubmit={this.handleSearchFormSubmit}/>
        {
          images.length > 0 &&
          <ImageGallery>
            {images.map(({id, webformatURL, largeImageURL}) => (
              <ImageGalleryItem key={id} webURL={webformatURL} largeURL={largeImageURL}/>
            ))}
          </ImageGallery>
        }
        {images.length > 0 && <Button onLoadMore={this.fetchImages}/>}
      </div>
    )
  }

}

export default App;
