from pydantic import BaseModel
from datetime import datetime


class PaymentResponse(BaseModel):

    payment_status: str
    paid_amount: float
    payment_time: datetime
    transaction_id: str