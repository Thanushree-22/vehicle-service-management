from sqlalchemy.orm import Session

from app.repositories.issue_repository import ( IssueRepository )

from app.repositories.vehicle_repository import ( VehicleRepository )

from app.repositories.component_repository import ( ComponentRepository )

from app.schemas.issue_schema import ( IssueCreate )

from app.utils.exceptions import ( not_found_exception )


class IssueController:

    @staticmethod
    def create_issue(
        db: Session,
        issue: IssueCreate
    ):

        vehicle = (
            VehicleRepository.get_vehicle_by_id(
                db,
                issue.vehicle_id
            )
        )

        if not vehicle:
            not_found_exception(
                "Vehicle not found"
            )

        component = (
            ComponentRepository.get_component_by_id(
                db,
                issue.component_id
            )
        )

        if not component:
            not_found_exception(
                "Component not found"
            )

        return IssueRepository.create_issue(
            db,
            issue
        )


    @staticmethod
    def get_all_issues(
        db: Session
    ):

        return IssueRepository.get_all_issues(
            db
        )


    @staticmethod
    def get_issue_by_id(
        db: Session,
        issue_id: int
    ):

        issue = (
            IssueRepository.get_issue_by_id(
                db,
                issue_id
            )
        )

        if not issue:
            not_found_exception(
                "Issue not found"
            )

        return issue


    @staticmethod
    def update_issue_status(
        db: Session,
        issue_id: int,
        status: str
    ):

        issue = (
            IssueRepository.update_issue_status(
                db,
                issue_id,
                status
            )
        )

        if not issue:
            not_found_exception(
                "Issue not found"
            )

        return issue


    @staticmethod
    def delete_issue(
        db: Session,
        issue_id: int
    ):

        issue = (
            IssueRepository.delete_issue(
                db,
                issue_id
            )
        )

        if not issue:
            not_found_exception(
                "Issue not found"
            )

        return {
            "message": "Issue deleted successfully"
        }