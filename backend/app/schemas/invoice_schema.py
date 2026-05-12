from pydantic import BaseModel
from datetime import datetime


class InvoiceBase(BaseModel):

    vehicle_id: int
    subtotal: float
    tax: float
    total_amount: float
    payment_status: str


class InvoiceCreate(InvoiceBase):
    pass


class InvoiceResponse(InvoiceBase):

    id: int
    created_at: datetime
    issue_id: int
    
    class Config:
        from_attributes = True