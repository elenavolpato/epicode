export interface Artist {
  id: number
  link: string
  name: string
  nb_album: number
  nb_fan: number
  picture: string
  picture_big: string
  picture_medium: string
  picture_small: string
  picture_xl: string
  radio: boolean
  share: string
  tracklist: string
  type: "artist"
}

export interface Album {
  id: number
  title: string
  cover: string
  cover_big: string
  cover_medium: string
  cover_small: string
  cover_xl: string
  md5_image: string
  tracklist: string
  type: "album"
  artist: Artist
}

export interface Track {
  id: number
  readable: boolean
  title: string
  title_short: string
  title_version: string
  link: string
  duration: number
  rank: number
  explicit_lyrics: boolean
  explicit_content_lyrics: number
  explicit_content_cover: number
  preview: string
  md5_image: string
  type: "track"
  artist: Artist
  album: Album
  isrc: string
}

export interface ItemContent {
  text: string
  img: string
  explicit?: boolean
}
