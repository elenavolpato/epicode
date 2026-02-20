import { Card, CardBody, CardImg, Col, Row } from "react-bootstrap"
import type { ItemContent } from "../types/types"

const radioContent: ItemContent[] = [
  { text: "Prologo con abuelo", img: "2a.png", explicit: true },
  { text: "The wanderer", img: "2b.png" },
  { text: "Michael Bublé & Carly Pearce", img: "2c.png" },
  { text: "Stephan Moccio: THe Zane Lowe interview", img: "2d.png" },
  { text: "Chart Spotlight: Julia Michaels", img: "2e.png" },
  { text: "Karri and Travis Mills", img: "2f.png" },
]

const RadioStations = () => {
  return (
    <Row className="mt-5">
      <h5>
        Nuovi episodi radio <i className="bi bi-chevron-right fs-6 fw-bold"></i>
      </h5>
      {radioContent.map((content, i) => (
        <Col
          className="g-3"
          xs={4}
          md={2}
        >
          <Card
            key={i}
            className="border-0 "
          >
            <CardImg
              src={`src/assets/images/${content.img}`}
              className="rounded-2"
            ></CardImg>
            <CardBody className="fs-6 pt-2 fw-bolder p-0 lh-1 d-flex justify-content-between align-items-start">
              {content.text}
              {content.explicit && (
                <div className="badge bg-white explicit-content rounded-1">
                  E
                </div>
              )}
            </CardBody>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default RadioStations
