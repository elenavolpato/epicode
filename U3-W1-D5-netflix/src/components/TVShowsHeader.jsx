import React from "react"
import { Row, Col, Dropdown, ButtonGroup } from "react-bootstrap"

const TVShowsHeader = () => {
  return (
    <Row className="justify-content-between">
      <Col className="d-flex">
        <h2 className="mb-4 text-light">TV Shows</h2>
        <ButtonGroup role="group">
          <Dropdown className="ms-4 mt-1">
            <Dropdown.Toggle
              variant="dark"
              size="sm"
              className=" border rounded-0 px-2 py-1"
            >
              Genres
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#">Comedy</Dropdown.Item>
              <Dropdown.Item href="#">Drama</Dropdown.Item>
              <Dropdown.Item href="#">Thriller</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </ButtonGroup>
      </Col>
    </Row>
  )
}

export default TVShowsHeader
