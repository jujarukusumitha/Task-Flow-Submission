from fastapi import APIRouter, Depends
from pydantic import BaseModel
from sqlalchemy.ext.asyncio import AsyncSession
from app.core.database import get_db

router = APIRouter()

class RegisterRequest(BaseModel):
    email: str
    password: str

class LoginRequest(BaseModel):
    email: str
    password: str

@router.post("/register")
async def register(user: RegisterRequest, db: AsyncSession = Depends(get_db)):
    return {"message": "User registered successfully"}

@router.post("/login")
async def login(user: LoginRequest):
    return {"access_token": "dummy_token", "token_type": "bearer"}