 Task Flow – Full Stack Submission

Backend Engineer Assessment Submission
Developed by Kusumitha J

Project Overview

Task Flow is a Kanban-style project management system built with a production-oriented backend using FastAPI and a modern frontend using React + TypeScript.

The system supports:

Board creation

Nested Lists and Cards

Drag-and-drop card movement

JWT-based authentication

PostgreSQL database

Dockerized setup

This implementation focuses on clean architecture, API integrity, and scalability.

Architecture Overview
Frontend (React + Vite + Tailwind)
        |
        | REST API
        ↓
Backend (FastAPI)
        |
        ↓
PostgreSQL Database
Backend Implementation
Tech Stack

FastAPI

SQLAlchemy ORM

PostgreSQL

Pydantic

JWT Authentication

Docker & Docker Compose

 Backend Structure
backend/
│
├── app/
│   ├── models.py
│   ├── schemas.py
│   ├── database.py
│   ├── routers/
│   │   ├── auth.py
│   │   ├── boards.py
│   │   └── cards.py
│
├── main.py
├── requirements.txt
└── docker-compose.yml
 Authentication

POST /auth/register

POST /auth/login

JWT token-based authentication.

 Board APIs
Create Board
POST /boards/?name=BoardName
Get Board (Nested Response)
GET /boards/{board_id}

Example Response:

{
  "id": 1,
  "title": "Task Flow",
  "lists": [
    {
      "id": 1,
      "title": "Todo",
      "position": 1,
      "board_id": 1,
      "cards": [
        {
          "id": 1,
          "title": "Build UI",
          "position": 1,
          "list_id": 1
        }
      ]
    }
  ]
}
 Cards
Create Card
POST /cards/
Move Card
PUT /cards/{card_id}/move

Implements drag-and-drop position updates.

 Frontend Implementation
Tech Stack

React

TypeScript

Vite

Tailwind CSS

dnd-kit

Frontend Structure
frontend/
│
├── src/
│   ├── api/
│   ├── components/
│   │   ├── BoardView.tsx
│   │   ├── ListColumn.tsx
│   │   └── CardItem.tsx
│   ├── types.ts
│   └── main.tsx
 Features

Responsive Kanban board

Smooth drag-and-drop interaction

API integration with backend

Clean component-based architecture

Running the Project
Option 1: Docker (Recommended)
docker-compose up --build

Backend:

http://localhost:8000

Frontend:

http://localhost:5173
Option 2: Manual Setup
Backend
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
Frontend
cd frontend
npm install
npm run dev
🧪 API Documentation

Swagger UI available at:

http://localhost:8000/docs
 Design Considerations

Proper separation of concerns

Response models aligned with frontend types

Nested relational loading for optimized board retrieval

CORS configuration for frontend integration

Dockerized environment for reproducibility

 Possible Improvements

Role-based access control

Optimistic UI updates with rollback handling

Real-time updates using WebSockets

Pagination for large boards

Unit & integration tests

Author

Kusumitha J
Full Stack Python Developer
FastAPI | React | PostgreSQL | Docker
