import { Button, Col, Row } from "react-bootstrap"
import Loading from "./Loading"
import Error from "./Error"
import { useEffect, useState } from "react"
import DetailsModal from "./DetailsModal"
import { useNavigate } from "react-router-dom"

const MoviesGallery = (props) => {
  const moviesURL = "http://www.omdbapi.com/?i=tt3896198&apikey=7c443bde&s="
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false) /*  */

  const handleError = (statusCode, error) => {
    switch (statusCode) {
      case 400:
        console.error("Bad Request: Invalid parameters provided")
        return "Invalid request. Please check your input."

      case 401:
        console.error("Unauthorized: Authentication required")
        return "Please log in to continue."

      case 403:
        console.error("Forbidden: Access denied")
        return "You do not have permission to access this resource."

      case 404:
        console.error("Not Found: Resource does not exist")
        return "The requested resource was not found."

      case 408:
        console.error("Request Timeout")
        return "Request timed out. Please try again."

      case 429:
        console.error("Too Many Requests: Rate limit exceeded")
        return "Too many requests. Please wait and try again later."

      case 500:
        console.error("Internal Server Error")
        return "Server error. Please try again later."

      case 502:
        console.error("Bad Gateway")
        return "Service temporarily unavailable."

      case 503:
        console.error("Service Unavailable")
        return "Service is currently unavailable. Please try again later."

      case 504:
        console.error("Gateway Timeout")
        return "Request timed out. Please try again."

      default:
        console.error(`Unexpected error: ${statusCode}`, error)
        return "An unexpected error occurred. Please try again."
    }
  }

  const getMovies = () => {
    fetch(moviesURL + props.searchedTerm)
      .then((res) => {
        if (res.ok) return res.json()
      })
      .then((moviesList) => {
        setMovies(moviesList.Search || [])
        setIsLoading(false)
      })
      .catch((err) => {
        console.error(err)
        handleError(err.status, err)
        setHasError(true)
        setIsLoading(false)
      })
  }

  useEffect(() => {
    getMovies()
  }, [props.searchedTerm])

  const navigate = useNavigate()

  return (
    <Row className="mb-3">
      {hasError && !isLoading && <Error />}
      <h4 className="text-white">{props.searchedTerm}</h4>
      {movies &&
        !isLoading &&
        movies.map((movie) => (
          <Col
            key={movie.imdbID}
            className="movie-item"
          >
            <div
              onClick={() => {
                navigate("/details/" + movie.imdbID)
              }}
            >
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

      {isLoading && <Loading />}
    </Row>
  )
}

export default MoviesGallery
