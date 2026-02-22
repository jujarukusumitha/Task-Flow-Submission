from sqlalchemy import Column, Integer, String, Float, Boolean, ForeignKey
from sqlalchemy.orm import relationship
from app.core.database import Base

class Card(Base):
    __tablename__ = "cards"

    id = Column(Integer, primary_key=True)
    title = Column(String)
    description = Column(String)
    position = Column(Float)
    list_id = Column(Integer, ForeignKey("lists.id"))
    is_deleted = Column(Boolean, default=False)
    version = Column(Integer, default=1)

    list = relationship("List", back_populates="cards")