import React, {Component} from 'react';
import Searchbar from "./components/Searchbar/Searchbar";
import fetchImagesService from "./services/image-api";
import Button from "./components/Button/Button";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageGalleryItem from "./components/ImageGalleryItem/ImageGalleryItem";
import Spinner from "./components/Spinner/Spinner";
import styles from "./App.module.css";

class App extends Component {
  state = {
    images: [],
    searchQuery: "",
    page: 1,
    error: null,
    loading: false,
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
    this.setState({loading: true});

    fetchImagesService(searchQuery, page)
      .then(images => this.setState(prevState => ({
        images: [...prevState.images, ...images], page: prevState.page + 1
      })))
      .then(() => {
      window.scrollTo({
        top: document.documentElement.offsetHeight,
        behavior: 'smooth',
      });
    })
      .catch(error => this.setState({error}))
      .finally(() => this.setState({loading: false}));
  }



  render() {
    const {images, loading} = this.state;
    return (
      <div className={styles.App}>
        <Searchbar onSubmit={this.handleSearchFormSubmit}/>
        {
          images.length > 0 &&
          <ImageGallery>
            {images.map(({id, webformatURL}) => (
              <ImageGalleryItem key={id} webURL={webformatURL}/>
            ))}
          </ImageGallery>
        }
        {loading && <Spinner/>}
        {images.length > 0 && <Button onLoadMore={this.fetchImages}/>}
      </div>
    )
  }

}

export default App;
