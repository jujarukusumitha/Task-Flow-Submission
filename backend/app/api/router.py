from fastapi import APIRouter
from app.api import auth, boards, cards

api_router = APIRouter()

api_router.include_router(auth.router, prefix="/auth", tags=["Auth"])
api_router.include_router(boards.router, prefix="/boards", tags=["Boards"])
api_router.include_router(cards.router, prefix="/cards", tags=["Cards"])