import { Component } from "react"
import { Container } from "react-bootstrap"
import TVShowsHeader from "../src/components/TVShowsHeader"
import MoviesGallery from "../src/components/MoviesGallery"
import Footer from "../src/components/Footer"

class Home extends Component {
  render() {
    return (
      <>
        <Container
          fluid
          className="px-4"
          bg="dark"
          data-bs-theme="dark"
        >
          <TVShowsHeader />

          <MoviesGallery searchedTerm="Star Wars" />
          <MoviesGallery searchedTerm="Lord of the Rings" />
          <MoviesGallery searchedTerm="Dune" />
          <Footer />
        </Container>
      </>
    )
  }
}

export default Home
