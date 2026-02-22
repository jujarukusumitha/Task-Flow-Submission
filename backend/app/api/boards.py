from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from app.core.database import get_db

router = APIRouter()


@router.post("/")
async def create_board(name: str, db: AsyncSession = Depends(get_db)):
   
    return {"message": f"Board '{name}' created"}


@router.get("/{board_id}")
async def get_board(board_id: int, db: AsyncSession = Depends(get_db)):
   
    return {
        "id": board_id,
        "name": "Sample Board",
        "lists": []
    }


@router.delete("/{board_id}")
async def delete_board(board_id: int, db: AsyncSession = Depends(get_db)):
   
    return {"message": f"Board {board_id} soft deleted"}