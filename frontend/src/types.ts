export interface Card {
  id: number
  title: string
  description: string
  position: number
  list_id: number
}

export interface List {
  id: number
  title: string
  position: number
  board_id: number
  cards: Card[]
}

export interface Board {
  id: number
  title: string
  lists: List[]
}