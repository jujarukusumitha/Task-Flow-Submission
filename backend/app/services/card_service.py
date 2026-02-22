from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.orm import selectinload

from app.models.card import Card
from app.core.ordering import get_new_position

async def move_card(
    db: AsyncSession,
    card_id: int,
    new_list_id: int,
    prev_pos: float | None,
    next_pos: float | None
):
    async with db.begin():

        result = await db.execute(
            select(Card).where(Card.id == card_id).with_for_update()
        )

        card = result.scalar_one()

        card.list_id = new_list_id
        card.position = get_new_position(prev_pos, next_pos)

        await db.flush()
        return card
