from fastapi import APIRouter
from fastapi import Depends

from sqlalchemy.orm import Session

from app.dependencies import get_db

from app.controllers.vehicle_controller import (  VehicleController )

from app.schemas.vehicle_schema import (
    VehicleCreate,
    VehicleResponse
)

router = APIRouter(
    prefix="/vehicles",
    tags=["Vehicles"]
)


@router.post(
    "/",
    response_model=VehicleResponse
)
def create_vehicle(
    vehicle: VehicleCreate,
    db: Session = Depends(get_db)
):

    return VehicleController.create_vehicle(
        db,
        vehicle
    )


@router.get(
    "/",
    response_model=list[VehicleResponse]
)
def get_all_vehicles(
    db: Session = Depends(get_db)
):

    return VehicleController.get_all_vehicles(
        db
    )


@router.get(
    "/{vehicle_id}",
    response_model=VehicleResponse
)
def get_vehicle_by_id(
    vehicle_id: int,
    db: Session = Depends(get_db)
):

    return VehicleController.get_vehicle_by_id(
        db,
        vehicle_id
    )


@router.put(
    "/{vehicle_id}",
    response_model=VehicleResponse
)
def update_vehicle(
    vehicle_id: int,
    vehicle: VehicleCreate,
    db: Session = Depends(get_db)
):

    return VehicleController.update_vehicle(
        db,
        vehicle_id,
        vehicle
    )


@router.delete(
    "/{vehicle_id}"
)
def delete_vehicle(
    vehicle_id: int,
    db: Session = Depends(get_db)
):

    return VehicleController.delete_vehicle(
        db,
        vehicle_id
    )