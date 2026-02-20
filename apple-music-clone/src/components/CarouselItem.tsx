import type { ItemContent } from "../types/types"

interface CarouselItemProps {
  item: ItemContent
}

const CarouselItem = ({ item }: CarouselItemProps) => {
  return (
    <div>
      <h5 className="text-white-50 fw-bolder">NUOVA STAZIONE RADIO</h5>
      <h4>{item.text}</h4>
      <img
        src={`src/assets/images/${item.img}`}
        alt={item.text || "carousel image"}
        style={{ maxWidth: "100%", height: "auto" }}
        className="rounded-4"
      />
    </div>
  )
}

export default CarouselItem
