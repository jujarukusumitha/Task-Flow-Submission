import axios from "axios"

const API = axios.create({
  baseURL: "http://localhost:8000",
})

export const fetchBoard = async (boardId: number) => {
  const res = await API.get(`/boards/${boardId}`)
  return res.data
}

export const moveCardAPI = async (
  cardId: number,
  newListId: number,
  prev: number | null,
  next: number | null
) => {
  return API.put(`/cards/${cardId}/move`, {
    new_list_id: newListId,
    prev_pos: prev,
    next_pos: next,
  })
}