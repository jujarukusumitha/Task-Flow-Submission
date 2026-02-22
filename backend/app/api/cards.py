from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from app.core.database import get_db

router = APIRouter()


@router.post("/")
async def create_card(title: str, list_id: int, db: AsyncSession = Depends(get_db)):
   
    return {"message": f"Card '{title}' created in list {list_id}"}


@router.put("/{card_id}/move")
async def move_card(
    card_id: int,
    new_list_id: int,
    db: AsyncSession = Depends(get_db)
):
 
    return {
        "message": f"Card {card_id} moved to list {new_list_id}"
    }