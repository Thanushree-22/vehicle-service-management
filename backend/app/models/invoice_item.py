from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import Float
from sqlalchemy import ForeignKey

from sqlalchemy.orm import relationship

from app.database import Base


class InvoiceItem(Base):

    __tablename__ = "invoice_items"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    invoice_id = Column(
        Integer,
        ForeignKey("invoices.id")
    )

    issue_id = Column(
        Integer,
        ForeignKey("issues.id")
    )

    amount = Column(
        Float,
        nullable=False
    )

    invoice = relationship(
        "Invoice",
        back_populates="invoice_items"
    )

    issue = relationship(
        "Issue",
        back_populates="invoice_items"
    )