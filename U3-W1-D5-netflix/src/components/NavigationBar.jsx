import { Navbar, Container, Nav } from "react-bootstrap"

const NavigationBar = () => {
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
          <Nav className="me-auto">
            <Nav.Link
              href="#"
              className="fw-bold"
              active
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#"
              className="fw-bold"
            >
              TV Shows
            </Nav.Link>
            <Nav.Link
              href="#"
              className="fw-bold"
            >
              Movies
            </Nav.Link>
            <Nav.Link
              href="#"
              className="fw-bold"
            >
              Recently Added
            </Nav.Link>
            <Nav.Link
              href="#"
              className="fw-bold"
            >
              My List
            </Nav.Link>
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
