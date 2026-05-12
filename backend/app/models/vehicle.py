from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy import DateTime

from sqlalchemy.orm import relationship

from datetime import datetime

from app.database import Base


class Vehicle(Base):

    __tablename__ = "vehicles"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    vehicle_number = Column(
        String(255),
        unique=True,
        nullable=False
    )

    owner_name = Column(
        String(255),
        nullable=False
    )

    brand = Column(
        String(255),
        nullable=False
    )

    model = Column(
        String(255),
        nullable=False
    )

    year = Column(
        Integer,
        nullable=False
    )

    created_at = Column(
        DateTime,
        default=datetime.utcnow
    )

    issues = relationship(
        "Issue",
        back_populates="vehicle"
    )

    invoices = relationship(
        "Invoice",
        back_populates="vehicle"
    )