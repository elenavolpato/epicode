import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import TopBar from "./components/TopBar"
import { Container } from "react-bootstrap"
import HeroCarousel from "./components/HeroCarousel"
import RadioStations from "./components/RadioStations"
import TracksList from "./components/TracksList"
import ExploreSection from "./components/ExploreSection"

//const albumURL = `https://striveschool-api.herokuapp.com/api/deezer/search?q=${albumID}`

function App() {
  return (
    <>
      <Container
        fluid
        className="vw-100 p-0"
      >
        <TopBar />
        <Container>
          <HeroCarousel />
          <RadioStations />
          <TracksList />
          <ExploreSection />
        </Container>
      </Container>
    </>
  )
}

export default App
