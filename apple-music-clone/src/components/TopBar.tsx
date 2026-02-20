import { Container, Nav, Navbar } from "react-bootstrap"

function TopBar() {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
    >
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="src/assets/logos/music.svg"
            alt="apple music logo"
            className="white-logo pb-2"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#login"
              className="danger"
            >
              item 1
            </Nav.Link>
            <Nav.Link
              href="#login"
              className="danger"
            >
              item 2
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav.Link
          href="#login"
          className="danger"
        >
          Accedi
        </Nav.Link>
      </Container>
    </Navbar>
  )
}

export default TopBar
