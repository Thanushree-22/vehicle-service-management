from fastapi import APIRouter
from fastapi import Depends

from sqlalchemy.orm import Session
from app.schemas.revenue_schema import ( RevenueResponse )

from app.dependencies import get_db

from app.controllers.revenue_controller import ( RevenueController )

router = APIRouter(
    prefix="/revenue",
    tags=["Revenue"]
)


@router.get("/daily")
def get_daily_revenue(
    db: Session = Depends(get_db)
):

    return RevenueController.get_daily_revenue(
        db
    )


@router.get("/monthly")
def get_monthly_revenue(
    db: Session = Depends(get_db)
):

    return RevenueController.get_monthly_revenue(
        db
    )


@router.get("/yearly")
def get_yearly_revenue(
    db: Session = Depends(get_db)
):

    return RevenueController.get_yearly_revenue(
        db
    )


@router.get(
    "/total",
    response_model=RevenueResponse
)
def get_total_revenue(
    db: Session = Depends(get_db)
):

    return RevenueController.get_total_revenue(
        db
    )