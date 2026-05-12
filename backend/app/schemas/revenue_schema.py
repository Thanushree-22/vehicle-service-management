from pydantic import BaseModel


class RevenueResponse(BaseModel):

    revenue: float


class DailyRevenueResponse(BaseModel):

    date: str
    revenue: float


class MonthlyRevenueResponse(BaseModel):

    month: int
    revenue: float


class YearlyRevenueResponse(BaseModel):

    year: int
    revenue: float