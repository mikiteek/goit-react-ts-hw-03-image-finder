import React, {Component} from 'react';
import Searchbar from "./components/Searchbar/Searchbar";
import fetchImagesService from "./services/image-api";
import Button from "./components/Button/Button";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageGalleryItem from "./components/ImageGalleryItem/ImageGalleryItem";
import Spinner from "./components/Spinner/Spinner";
import Modal from "./components/Modal/Modal";
import styles from "./App.module.css";
import {string} from "prop-types";

interface stateTypes {
  images: any[],
  searchQuery: string,
  page: number,
  error: any,
  loading: boolean,
  largeImg: string,
}

class App extends Component<{}, stateTypes> {
  state = {
    images: [],
    searchQuery: "",
    page: 1,
    error: null,
    loading: false,
    largeImg: "",
  };

  componentDidUpdate(prevProps: any, prevState: stateTypes) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;

    if (prevQuery !== nextQuery) {
      this.fetchImages();
    }
  };

  private handleSearchFormSubmit = (query: string): void => {
    this.setState({searchQuery: query, page: 1, images: []})
  }

  private fetchImages = (): void => {
    const {searchQuery, page} = this.state;
    this.setState({loading: true});

    fetchImagesService(searchQuery, page)
      .then(images => this.setState((prevState: stateTypes) => ({
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

  private toggleModal = (imgUrl: string) => {
    this.setState({largeImg: imgUrl})
  }

  render() {
    const {images, loading, largeImg} = this.state;
    return (
      <div className={styles.App}>
        <Searchbar onSubmit={this.handleSearchFormSubmit}/>
        {
          images.length > 0 &&
          <ImageGallery>
            {images.map(({id, webformatURL, largeImageURL}) => (
              <ImageGalleryItem key={id} webURL={webformatURL} lagreUrl={largeImageURL} onShowModal={this.toggleModal}/>
            ))}
          </ImageGallery>
        }
        {loading && <Spinner/>}
        {images.length > 0 && <Button onLoadMore={this.fetchImages}/>}
        {
          largeImg &&
          <Modal onCloseModal={this.toggleModal}>
            <img title="large image" src={largeImg}/>
          </Modal>
        }
      </div>
    );
  }
}

export default App;
