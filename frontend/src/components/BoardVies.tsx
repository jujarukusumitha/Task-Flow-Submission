import { useEffect, useState } from "react"
import { DndContext, closestCenter } from "@dnd-kit/core"
import type { DragEndEvent } from "@dnd-kit/core"
import { fetchBoard, moveCardAPI } from "../api/boardApi"
import type { Board } from "../types"
import ListColumn from "./ListColumn"

export default function BoardView() {
  const [board, setBoard] = useState<Board | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadBoard = async () => {
      try {
        const data = await fetchBoard(1)
        setBoard(data)
      } catch (error) {
        console.error("Failed to fetch board:", error)
      } finally {
        setLoading(false)
      }
    }

    loadBoard()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        Loading board...
      </div>
    )
  }

  if (!board) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        Failed to load board
      </div>
    )
  }

  const handleDragEnd = async (event: DragEndEvent) => {
    const { active, over } = event
    if (!over) return

    const cardId = Number(active.id)

    const sourceList = board.lists.find((l) =>
      l.cards.some((c) => c.id === cardId)
    )

    if (!sourceList) return

    let targetList =
      board.lists.find((l) =>
        l.cards.some((c) => c.id === Number(over.id))
      ) ||
      board.lists.find((l) => l.id === Number(over.id))

    if (!targetList) return

    const card = sourceList.cards.find((c) => c.id === cardId)!
    sourceList.cards = sourceList.cards.filter((c) => c.id !== cardId)
    targetList.cards.push(card)

    setBoard({ ...board })

    try {
      await moveCardAPI(cardId, targetList.id, null, null)
    } catch (error) {
      console.error("Move failed, reloading board")
      const refreshed = await fetchBoard(1)
      setBoard(refreshed)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-200 via-blue-100 to-purple-200 p-10">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-800 tracking-tight">
          {board.title}
        </h1>
        <p className="text-gray-500 mt-1">
          Drag and drop cards between lists
        </p>
      </div>

      {board.lists.length === 0 ? (
        <div className="text-gray-500">No lists available.</div>
      ) : (
        <DndContext
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <div className="flex gap-8 overflow-x-auto pb-8">
            {board.lists.map((list) => (
              <ListColumn key={list.id} list={list} />
            ))}
          </div>
        </DndContext>
      )}
    </div>
  )
}