from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    DATABASE_URL: str = "postgresql+asyncpg://postgres:postgres123@localhost:5432/taskflow"
    SECRET_KEY: str = "supersecret"
    ALGORITHM: str = "HS256"

settings = Settings()