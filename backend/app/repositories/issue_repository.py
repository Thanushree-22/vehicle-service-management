from sqlalchemy.orm import Session

from app.models.issue import ( Issue )


class IssueRepository:

    @staticmethod
    def create_issue(
        db: Session,
        issue_data
    ):

        issue = Issue(
            **issue_data.dict()
        )

        db.add(issue)

        db.commit()

        db.refresh(issue)

        return issue


    @staticmethod
    def get_all_issues(
        db: Session
    ):

        return db.query(Issue).all()


    @staticmethod
    def get_issue_by_id(
        db: Session,
        issue_id: int
    ):

        return (
            db.query(Issue)
            .filter(Issue.id == issue_id)
            .first()
        )


    @staticmethod
    def update_issue_status(
        db: Session,
        issue_id: int,
        status: str
    ):

        issue = (
            db.query(Issue)
            .filter(Issue.id == issue_id)
            .first()
        )

        if not issue:
            return None

        issue.status = status

        db.commit()

        db.refresh(issue)

        return issue


    @staticmethod
    def delete_issue(
        db: Session,
        issue_id: int
    ):

        issue = (
            db.query(Issue)
            .filter(Issue.id == issue_id)
            .first()
        )

        if not issue:
            return None

        db.delete(issue)

        db.commit()

        return issue