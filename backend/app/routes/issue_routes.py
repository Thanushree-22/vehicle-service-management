from fastapi import APIRouter
from fastapi import Depends

from sqlalchemy.orm import Session

from app.dependencies import get_db

from app.controllers.issue_controller import ( IssueController )

from app.schemas.issue_schema import ( IssueCreate, IssueResponse, IssueStatusUpdate )

router = APIRouter(
    prefix="/issues",
    tags=["Issues"]
)


@router.post(
    "/",
    response_model=IssueResponse
)
def create_issue(
    issue: IssueCreate,
    db: Session = Depends(get_db)
):

    return IssueController.create_issue(
        db,
        issue
    )


@router.get(
    "/",
    response_model=list[IssueResponse]
)
def get_all_issues(
    db: Session = Depends(get_db)
):

    return IssueController.get_all_issues(
        db
    )


@router.get(
    "/{issue_id}",
    response_model=IssueResponse
)
def get_issue_by_id(
    issue_id: int,
    db: Session = Depends(get_db)
):

    return IssueController.get_issue_by_id(
        db,
        issue_id
    )


@router.put(
    "/{issue_id}/status"
)
def update_issue_status(
    issue_id: int,
    issue_status: IssueStatusUpdate,
    db: Session = Depends(get_db)
):

    return IssueController.update_issue_status(
        db,
        issue_id,
        issue_status.status
    )


@router.delete(
    "/{issue_id}"
)
def delete_issue(
    issue_id: int,
    db: Session = Depends(get_db)
):

    return IssueController.delete_issue(
        db,
        issue_id
    )