from fastapi import APIRouter
from fastapi import Depends

from sqlalchemy.orm import Session

from app.dependencies import get_db

from app.controllers.invoice_controller import ( InvoiceController)

from app.schemas.invoice_schema import ( InvoiceResponse )

router = APIRouter(
    prefix="/invoices",
    tags=["Invoices"]
)


@router.post(
    "/generate/{issue_id}",
    response_model=InvoiceResponse
)
def generate_invoice(
    issue_id: int,
    db: Session = Depends(get_db)
):

    return InvoiceController.generate_invoice(
        db,
        issue_id
    )


@router.get(
    "/",
    response_model=list[InvoiceResponse]
)
def get_all_invoices(
    db: Session = Depends(get_db)
):

    return InvoiceController.get_all_invoices(
        db
    )


@router.get(
    "/{invoice_id}",
    response_model=InvoiceResponse
)
def get_invoice_by_id(
    invoice_id: int,
    db: Session = Depends(get_db)
):

    return InvoiceController.get_invoice_by_id(
        db,
        invoice_id
    )