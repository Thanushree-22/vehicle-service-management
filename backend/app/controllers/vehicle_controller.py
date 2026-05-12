from sqlalchemy.orm import Session

from app.repositories.vehicle_repository import ( VehicleRepository )

from app.schemas.vehicle_schema import ( VehicleCreate )

from app.utils.exceptions import ( not_found_exception )

from fastapi import HTTPException


class VehicleController:

    @staticmethod
    def create_vehicle(
        db: Session,
        vehicle: VehicleCreate
    ):

        return VehicleRepository.create_vehicle(
            db,
            vehicle
        )


    @staticmethod
    def get_all_vehicles(
        db: Session
    ):

        return VehicleRepository.get_all_vehicles(
            db
        )


    @staticmethod
    def get_vehicle_by_id(
        db: Session,
        vehicle_id: int
    ):

        vehicle = (
            VehicleRepository.get_vehicle_by_id(
                db,
                vehicle_id
            )
        )

        if not vehicle:
            not_found_exception(
                "Vehicle not found"
            )

        return vehicle


    @staticmethod
    def update_vehicle(
        db: Session,
        vehicle_id: int,
        vehicle_data: VehicleCreate
    ):

        vehicle = (
            VehicleRepository.update_vehicle(
                db,
                vehicle_id,
                vehicle_data
            )
        )

        if not vehicle:
            not_found_exception(
                "Vehicle not found"
            )

        return vehicle

    @staticmethod
    def delete_vehicle(
    db: Session,
    vehicle_id: int
    ):

        vehicle = (
        VehicleRepository.get_vehicle_by_id(
                db,
                vehicle_id
            )
        )

        if not vehicle:
            not_found_exception(
                "Vehicle not found"
            )

        if vehicle.issues or vehicle.invoices:

            raise HTTPException(
                status_code=400,
                detail=
                "Cannot delete vehicle with existing issues or invoices"
            )

        VehicleRepository.delete_vehicle(
            db,
            vehicle_id
        )

        return {
            "message":
            "Vehicle deleted successfully"
        }
   
       