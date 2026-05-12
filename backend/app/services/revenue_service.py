from sqlalchemy import func
from sqlalchemy.orm import Session

from app.models.invoice import ( Invoice )


class RevenueService:

    @staticmethod
    def get_total_revenue(
        db: Session
    ):

        revenue = db.query(
            func.sum(
                Invoice.total_amount
            )
        ).scalar()

        return revenue or 0


    @staticmethod
    def get_daily_revenue(
        db: Session
    ):

        revenues = (
            db.query(
                func.date(Invoice.created_at),
                func.sum(Invoice.total_amount)
            )
            .group_by(
                func.date(Invoice.created_at)
            )
            .all()
        )

        return [
            {
                "date": str(item[0]),
                "revenue": item[1]
            }
            for item in revenues
        ]


    @staticmethod
    def get_monthly_revenue(
        db: Session
    ):

        revenues = (
            db.query(
                func.extract(
                    "month",
                    Invoice.created_at
                ),
                func.sum(Invoice.total_amount)
            )
            .group_by(
                func.extract(
                    "month",
                    Invoice.created_at
                )
            )
            .all()
        )

        return [
            {
                "month": int(item[0]),
                "revenue": item[1]
            }
            for item in revenues
        ]


    @staticmethod
    def get_yearly_revenue(
        db: Session
    ):

        revenues = (
            db.query(
                func.extract(
                    "year",
                    Invoice.created_at
                ),
                func.sum(Invoice.total_amount)
            )
            .group_by(
                func.extract(
                    "year",
                    Invoice.created_at
                )
            )
            .all()
        )

        return [
            {
                "year": int(item[0]),
                "revenue": item[1]
            }
            for item in revenues
        ]