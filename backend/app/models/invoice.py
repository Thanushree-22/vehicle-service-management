from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import Float
from sqlalchemy import String
from sqlalchemy import ForeignKey
from sqlalchemy import DateTime

from sqlalchemy.orm import relationship

from datetime import datetime

from app.database import Base


class Invoice(Base):

    __tablename__ = "invoices"

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

    subtotal = Column(
        Float,
        nullable=False
    )

    tax = Column(
        Float,
        nullable=False
    )

    total_amount = Column(
        Float,
        nullable=False
    )

    payment_status = Column(
        String(255),
        default="PAID"
    )

    created_at = Column(
        DateTime,
        default=datetime.utcnow
    )

    vehicle = relationship(
        "Vehicle",
        back_populates="invoices"
    )

    invoice_items = relationship(
        "InvoiceItem",
        back_populates="invoice"
    )
    
    issue_id = Column(
    Integer,
    ForeignKey("issues.id"),
    unique=True,
    nullable=False
    )