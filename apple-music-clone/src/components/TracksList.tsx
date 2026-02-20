import { useEffect, useState } from "react"
import type { Track } from "../types/types"
import { Col, Row, Card, CardImg, CardBody } from "react-bootstrap"

interface AlbumsResponse {
  data: Track[]
}

const artistURL = `https://striveschool-api.herokuapp.com/api/deezer/search?q=queen`

const TracksList = () => {
  const [tracks, setTracks] = useState<Track[] | null>(null)

  const getAlbums = () => {
    fetch(artistURL)
      .then((res) => {
        if (res.ok) {
          return res.json() as Promise<AlbumsResponse>
        } else {
          throw new Error("Error while fetching albums")
        }
      })
      .then((data) => {
        setTracks(showOnlyTen(data.data))
        console.log(data.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const showOnlyTen = (tracks: Track[]) => {
    return tracks.slice(0, 12)
  }

  useEffect(() => {
    getAlbums()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Row className="mt-5">
      <h5>
        Nuove uscite <i className="bi bi-chevron-right fs-6 fw-bold"></i>
      </h5>
      {tracks?.map((track) => (
        <Col
          xs={4}
          md={2}
          className="g-3"
        >
          <Card
            key={track.id}
            className="border-0"
          >
            <CardImg
              src={track.album.cover}
              alt={track.title}
              className="rounded-3"
            />
            <CardBody className="p-0 pt-2 lh-1">{track.title}</CardBody>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default TracksList
