from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy import Float
from sqlalchemy import Boolean
from sqlalchemy import DateTime

from sqlalchemy.orm import relationship

from datetime import datetime

from app.database import Base


class Component(Base):

    __tablename__ = "components"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    name = Column(
        String(255),
        nullable=False
    )

    component_type = Column(
        String(255),
        nullable=False
    )

    new_price = Column(
        Float,
        nullable=False
    )

    repair_price = Column(
        Float,
        nullable=True
    )

    stock_quantity = Column(
        Integer,
        default=0
    )

    is_repairable = Column(
        Boolean,
        default=True
    )

    created_at = Column(
        DateTime,
        default=datetime.utcnow
    )

    issues = relationship(
        "Issue",
        back_populates="component"
    )