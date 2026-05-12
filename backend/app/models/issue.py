from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy import Float
from sqlalchemy import ForeignKey
from sqlalchemy import DateTime

from sqlalchemy.orm import relationship

from datetime import datetime

from app.database import Base


class Issue(Base):

    __tablename__ = "issues"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    vehicle_id = Column(
        Integer,
        ForeignKey("vehicles.id"),
        nullable=False
    )

    component_id = Column(
        Integer,
        ForeignKey("components.id"),
        nullable=False
    )

    issue_description = Column(
        String(255),
        nullable=False
    )

    service_type = Column(
        String(255),
        nullable=False
    )

    labor_cost = Column(
        Float,
        default=0
    )

    status = Column(
        String(255),
        default="PENDING"
    )

    created_at = Column(
        DateTime,
        default=datetime.utcnow
    )

    vehicle = relationship(
        "Vehicle",
        back_populates="issues"
    )

    component = relationship(
        "Component",
        back_populates="issues"
    )

    invoice_items = relationship(
        "InvoiceItem",
        back_populates="issue"
    )