import { Component } from "react"
import { Col, Row } from "react-bootstrap"

class MoviesGallery extends Component {
  moviesURL = "http://www.omdbapi.com/?i=tt3896198&apikey=7c443bde&s="
  state = {
    searchedTerm: this.props.searchedTerm,
    movies: [],
  }

  getMovies = () => {
    fetch(this.moviesURL + this.props.searchedTerm)
      .then((res) => {
        if (res.ok) return res.json()
      })
      .then((moviesList) => {
        console.log(moviesList.Search)
        this.setState({ movies: moviesList.Search || [] })
      })
      .catch((err) => console.error(err))
  }

  componentDidMount() {
    this.getMovies()
  }
  render() {
    return (
      <Row className="mb-3">
        <h4 className="text-white">{this.props.searchedTerm}</h4>
        {this.state.movies &&
          this.state.movies.map((movie) => (
            <Col
              key={movie.imdbID}
              className="movie-item"
            >
              <div>
                <div>
                  <img
                    className="img-fluid"
                    src={movie.Poster}
                    alt={movie.Title}
                  />
                </div>
              </div>
            </Col>
          ))}
      </Row>
    )
  }
}

export default MoviesGallery
