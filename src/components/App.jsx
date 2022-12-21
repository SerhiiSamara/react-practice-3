import { GlobalStyle } from './GlobalStyle';
import { Component } from 'react';
import 'modern-normalize';
import { fetchMovies } from 'MoviesApi';
import { Button } from './Button';
import { MoviesGallery } from './MoviesGallery';
import { Modal } from './Modal';

export class App extends Component {
  state = {
    movies: [],
    page: 1,
    isLoading: false,
    error: '',
    isMoviesShown: false,
    currentImage: null,
  };

  componentDidUpdate(_, prevState) {
    if (
      (prevState.isMoviesShown !== this.state.isMoviesShown &&
        this.state.isMoviesShown) ||
      prevState.page !== this.state.page
    ) {
      fetchMovies(this.state.page).then(({ data: { results } }) => {
        this.setState(prevState => ({
          movies: [...prevState.movies, ...results],
        }));
      });
    }
    if (
      prevState.isMoviesShown !== this.state.isMoviesShown &&
      !this.state.isMoviesShown
    ) {
			this.setState({ movies: [], page: 1 });
			
    }
  }

  toggleVisibility = () => {
    this.setState(prevState => ({ isMoviesShown: !prevState.isMoviesShown }));
  };

  openModal = image => {
    this.setState({ currentImage: image });
  };

  closeModal = () => {
    this.setState({ currentImage: null });
  };

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { isMoviesShown, movies, currentImage } = this.state;
    return (
      <>
        <Button
          text={isMoviesShown ? 'Hide movies' : 'Show movies'}
          clickHandler={this.toggleVisibility}
        />
        {movies.length > 0 && (
          <>
            <MoviesGallery movies={movies} onModal={this.openModal} />
            <Button text="Load more" clickHandler={this.loadMore} />
          </>
        )}
        {currentImage && (
          <Modal image={currentImage} offModal={this.closeModal} />
        )}
        <GlobalStyle />
      </>
    );
  }
}
