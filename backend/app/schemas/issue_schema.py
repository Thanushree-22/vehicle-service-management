from pydantic import BaseModel
from datetime import datetime


class IssueBase(BaseModel):

    vehicle_id: int
    component_id: int
    issue_description: str
    service_type: str
    labor_cost: float


class IssueCreate(IssueBase):
    pass


class IssueUpdate(IssueBase):

    status: str


class IssueStatusUpdate(BaseModel):

    status: str


class IssueResponse(IssueBase):

    id: int
    status: str
    created_at: datetime

    class Config:
        from_attributes = True