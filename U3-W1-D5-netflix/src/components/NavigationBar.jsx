import { Navbar, Container, Nav } from "react-bootstrap"
import { Link, useLocation } from "react-router-dom"

const NavigationBar = () => {
  const location = useLocation()

  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
    >
      <Container fluid>
        <Navbar.Brand href="#Home">
          <img
            src="src/assets/logo.png"
            className="logo"
            alt="Logo"
          />
        </Navbar.Brand>

        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto text-white-50">
            <Link
              to="/"
              className={` text-decoration-none fw-bold px-3 ${location.pathname === "/" ? "text-white" : "text-white-50"} `}
            >
              Home
            </Link>

            <Link
              to="/tv-shows"
              className={` text-decoration-none fw-bold px-3 ${location.pathname === "/tv-shows" ? "text-white" : "text-white-50"} `}
            >
              TV Shows
            </Link>
            <Link
              to="/movies"
              className={` text-decoration-none fw-bold px-3 ${location.pathname === "/movies" ? "text-white" : "text-white-50"} `}
            >
              Movies
            </Link>
            <Link
              to="/recently-added"
              className={` text-decoration-none fw-bold px-3 ${location.pathname === "/recently-added" ? "text-white" : "text-white-50"} `}
            >
              Recently Added
            </Link>
            <Link
              to="/my-list"
              className={` text-decoration-none fw-bold px-3 ${location.pathname === "/my-list" ? "text-white" : "text-white-50"} `}
            >
              My List
            </Link>
          </Nav>

          <div className="d-flex align-items-center">
            <i className="bi bi-search icons"></i>
            <div
              id="kids"
              className="fw-bold"
            >
              KIDS
            </div>
            <i className="bi bi-bell icons"></i>
            <i className="bi bi-person-circle icons"></i>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default NavigationBar
