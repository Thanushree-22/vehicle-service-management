from pydantic import BaseModel
from typing import Optional
from datetime import datetime


class ComponentBase(BaseModel):

    name: str
    component_type: str
    new_price: float
    repair_price: Optional[float] = None
    stock_quantity: int
    is_repairable: bool


class ComponentCreate(ComponentBase):
    pass


class ComponentUpdate(ComponentBase):
    pass


class ComponentResponse(ComponentBase):

    id: int
    created_at: datetime

    class Config:
        from_attributes = True