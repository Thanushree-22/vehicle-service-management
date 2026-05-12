from sqlalchemy.orm import Session

from app.services.revenue_service import ( RevenueService )


class RevenueController:

    @staticmethod
    def get_daily_revenue(
        db: Session
    ):

        return RevenueService.get_daily_revenue(
            db
        )


    @staticmethod
    def get_monthly_revenue(
        db: Session
    ):

        return RevenueService.get_monthly_revenue(
            db
        )


    @staticmethod
    def get_yearly_revenue(
        db: Session
    ):

        return RevenueService.get_yearly_revenue(
            db
        )


    @staticmethod
    def get_total_revenue(
            db: Session
    ):

        total_revenue = (
            RevenueService.get_total_revenue(
            db
            )
        )

        return {
            "revenue": total_revenue
        }