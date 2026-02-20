import { Container, Row, Col, Button } from "react-bootstrap"

const Footer = () => {
  return (
    <footer>
      <Container fluid>
        <Row className="justify-content-center mt-5">
          <Col
            xs={12}
            md={8}
          >
            <Row>
              <Col className="mb-2 text-white-50">
                <i className="bi bi-facebook footer-icon me-2"></i>
                <i className="bi bi-instagram footer-icon me-2"></i>
                <i className="bi bi-twitter-x footer-icon me-2"></i>
                <i className="bi bi-youtube footer-icon"></i>
              </Col>
            </Row>

            <Row
              xs={1}
              sm={2}
              md={4}
              lg={4}
            >
              <Col>
                <div className="footer-links text-white-50">
                  <p>
                    <a
                      href="#"
                      alt="footer link"
                    >
                      Audio and Subtitles
                    </a>
                  </p>
                  <p>
                    <a
                      href="#"
                      alt="footer link"
                    >
                      Media Center
                    </a>
                  </p>
                  <p>
                    <a
                      href="#"
                      alt="footer link"
                    >
                      Privacy
                    </a>
                  </p>
                  <p>
                    <a
                      href="#"
                      alt="footer link"
                    >
                      Contact us
                    </a>
                  </p>
                </div>
              </Col>

              <Col>
                <div className="footer-links">
                  <p>
                    <a
                      href="#"
                      alt="footer link"
                    >
                      Audio Description
                    </a>
                  </p>
                  <p>
                    <a
                      href="#"
                      alt="footer link"
                    >
                      Investor Relations
                    </a>
                  </p>
                  <p>
                    <a
                      href="#"
                      alt="footer link"
                    >
                      Legal Notices
                    </a>
                  </p>
                </div>
              </Col>

              <Col>
                <div className="footer-links">
                  <p>
                    <a
                      href="#"
                      alt="footer link"
                    >
                      Help Center
                    </a>
                  </p>
                  <p>
                    <a
                      href="#"
                      alt="footer link"
                    >
                      Jobs
                    </a>
                  </p>
                  <p>
                    <a
                      href="#"
                      alt="footer link"
                    >
                      Cookie Preferences
                    </a>
                  </p>
                </div>
              </Col>

              <Col>
                <div className="footer-links">
                  <p>
                    <a
                      href="#"
                      alt="footer link"
                    >
                      Gift Cards
                    </a>
                  </p>
                  <p>
                    <a
                      href="#"
                      alt="footer link"
                    >
                      Terms of Use
                    </a>
                  </p>
                  <p>
                    <a
                      href="#"
                      alt="footer link"
                    >
                      Corporate Information
                    </a>
                  </p>
                </div>
              </Col>
            </Row>

            <Row>
              <Col className="mb-2">
                <Button
                  variant="outline-secondary"
                  size="sm"
                  className="footer-button rounded-0 mt-3"
                >
                  Service Code
                </Button>
              </Col>
            </Row>

            <Row>
              <Col className="mb-2 mt-2 copyright">
                © 1997-2023 Netflix, Inc.
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
