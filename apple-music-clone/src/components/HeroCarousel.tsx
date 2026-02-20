import { useState } from "react"
import Carousel from "react-bootstrap/Carousel"
import CarouselItem from "./CarouselItem"
import type { ItemContent } from "../types/types"

const carouselContent: ItemContent[] = [
  {
    text: "Rilassati, al resto pensiamo noi. Ascolta Apple Music Chill",
    img: "1a.png",
  },
  { text: "Ecco la nuova casa della musica latina", img: "1b.png" },
  { text: "Ascolta club music", img: "1c.png" },
  {
    text: "Rilassati, al resto pensiamo noi. Ascolta Apple Music Chill",
    img: "1a.png",
  },
]

function HeroCarousel() {
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex)
  }

  const groupedContent: ItemContent[][] = []
  for (let i = 0; i < carouselContent.length; i += 2) {
    groupedContent.push(carouselContent.slice(i, i + 2))
  }

  return (
    <>
      <h1 className="r border-bottom "> Novità</h1>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        interval={null}
        indicators={false}
      >
        {groupedContent.map((group, i) => (
          <Carousel.Item key={i}>
            <div
              style={{ display: "flex", justifyContent: "center", gap: "20px" }}
            >
              {group.map((item, j) => (
                <CarouselItem
                  key={j}
                  item={item}
                />
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  )
}

export default HeroCarousel
