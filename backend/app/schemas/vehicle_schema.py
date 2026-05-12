from pydantic import BaseModel
from datetime import datetime


class VehicleBase(BaseModel):

    vehicle_number: str
    owner_name: str
    brand: str
    model: str
    year: int


class VehicleCreate(VehicleBase):
    pass


class VehicleUpdate(VehicleBase):
    pass


class VehicleResponse(VehicleBase):

    id: int
    created_at: datetime

    class Config:
        from_attributes = True