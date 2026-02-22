import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import type { Card } from "../types"

interface Props {
  card: Card
}

export default function CardItem({ card }: Props) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: card.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }
return (
  <div
    ref={setNodeRef}
    style={style}
    {...attributes}
    {...listeners}
    className="bg-white rounded-xl shadow-md p-4 border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-200 cursor-grab active:cursor-grabbing"
  >
    <div className="flex justify-between items-center">
      <h3 className="text-gray-800 font-medium text-sm">
        {card.title}
      </h3>
      <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full">
        Task
      </span>
    </div>

    <div className="mt-3 text-xs text-gray-400 flex justify-between">
      <span>#{card.id}</span>
      <span>Drag me</span>
    </div>
  </div>
)
}