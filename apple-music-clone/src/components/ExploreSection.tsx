import { Col, Row, Button } from "react-bootstrap"

const exploreButtonsText = [
  "Esplora per genere",
  "Worldwide",
  "Video musicali",
  "Decenni",
  "Classifiche",
  "Nuovi artisti",
  "Attività e stati d'animo",
  "Audio spaziale",
  "Hit del passato",
]

const ExploreSection = () => {
  return (
    <Row className="pt-5 g-3">
      {exploreButtonsText.map((text) => (
        <Col
          xs={12}
          md={4}
        >
          <Button variant="outline-danger border-0 fw-bold rounded-3  w-100 d-flex justify-content-between explore-button h-100">
            <p className="pt-3">{text}</p>
            <i className="pt-3 bi bi-chevron-right fs-6 fw-bold"></i>
          </Button>
        </Col>
      ))}
    </Row>
  )
}

export default ExploreSection
