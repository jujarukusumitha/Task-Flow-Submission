from sqlalchemy import Column, Integer, String, Float, Boolean, ForeignKey
from sqlalchemy.orm import relationship
from app.core.database import Base

class List(Base):
    __tablename__ = "lists"

    id = Column(Integer, primary_key=True)
    title = Column(String)
    position = Column(Float)
    board_id = Column(Integer, ForeignKey("boards.id"))
    is_deleted = Column(Boolean, default=False)

    board = relationship("Board", back_populates="lists")
    cards = relationship("Card", back_populates="list")