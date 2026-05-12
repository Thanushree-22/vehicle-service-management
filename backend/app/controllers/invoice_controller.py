from fastapi import HTTPException

from sqlalchemy.orm import Session
from app.models.invoice import Invoice

from app.repositories.invoice_repository import (  InvoiceRepository )

from app.repositories.issue_repository import ( IssueRepository )

from app.repositories.component_repository import (  ComponentRepository
)

from app.services.billing_service import ( BillingService )

from app.utils.exceptions import ( not_found_exception)

from app.models.invoice_item import ( InvoiceItem )


class InvoiceController:

    @staticmethod
    def generate_invoice(
        db: Session,
        issue_id: int
    ):
        existing_invoice = (
            db.query(Invoice)
            .filter(
                Invoice.issue_id == issue_id
            )
        .first()
        )

        if existing_invoice:

            raise HTTPException(
                status_code=400,
                detail="Invoice already generated for this issue"
            )
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

        if issue.service_type == "NEW":

            component_cost = component.new_price

        else:

            component_cost = component.repair_price


        bill = BillingService.generate_bill(
            component_cost,
            issue.labor_cost
        )

        invoice_data = {
             "issue_id": issue_id,
            "vehicle_id": issue.vehicle_id,
            "subtotal": bill["subtotal"],
            "tax": bill["tax"],
            "total_amount": bill["total_amount"],
            "payment_status": "PAID"
        }

        return InvoiceRepository.create_invoice(
            db,
            invoice_data
        )


    @staticmethod
    def get_invoice_by_id(
        db: Session,
        invoice_id: int
    ):

        invoice = (
            InvoiceRepository.get_invoice_by_id(
                db,
                invoice_id
            )
        )

        if not invoice:
            not_found_exception(
                "Invoice not found"
            )

        return invoice


    @staticmethod
    def get_all_invoices(
        db: Session
    ):

        return InvoiceRepository.get_all_invoices(
            db
        )