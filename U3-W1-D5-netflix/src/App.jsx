import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import Footer from "./components/Footer"
import NavigationBar from "./components/NavigationBar"
import TVShows from "../routes/TVShows"
import Home from "../routes/Home"
import "bootstrap/dist/css/bootstrap.min.css"
import MovieDetails from "./components/DetailsModal"

function App() {
  return (
    <BrowserRouter>
      <div className="bg-dark min-vh-100">
        <NavigationBar />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/tv-shows"
            element={<TVShows />}
          />
          <Route
            path="/details/:imdbID"
            element={<MovieDetails />}
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
