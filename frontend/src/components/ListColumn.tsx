import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable"
import type { List } from "../types"
import CardItem from "./CardItem"

interface Props {
  list: List
}

export default function ListColumn({ list }: Props) {
  <div className="w-80 flex-shrink-0 rounded-2xl bg-white/70 backdrop-blur-xl shadow-xl border border-white/50 p-5 transition hover:shadow-2xl">
  <h2 className="text-lg font-semibold text-gray-700 mb-5 flex items-center justify-between">
    {list.title}
    <span className="text-sm bg-indigo-100 text-indigo-600 px-2 py-1 rounded-full">
      {list.cards.length}
    </span>
  </h2>

  <SortableContext
    items={list.cards.map((c) => c.id)}
    strategy={verticalListSortingStrategy}
  >
    <div className="space-y-4">
      {list.cards.map((card) => (
        <CardItem key={card.id} card={card} />
      ))}
    </div>
  </SortableContext>
</div>
}