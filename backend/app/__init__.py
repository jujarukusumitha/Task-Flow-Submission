from fastapi import FastAPI
from app.api.router import api_router

app = FastAPI(title="Task Flow API")

app.include_router(api_router)

@app.get("/")
def root():
    return {"message": "Task Flow Backend Running"}
