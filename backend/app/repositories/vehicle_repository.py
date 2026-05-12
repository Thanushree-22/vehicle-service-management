from sqlalchemy.orm import Session

from app.models.vehicle import ( Vehicle )


class VehicleRepository:

    @staticmethod
    def create_vehicle(
        db: Session,
        vehicle_data
    ):

        vehicle = Vehicle(
            **vehicle_data.dict()
        )

        db.add(vehicle)

        db.commit()

        db.refresh(vehicle)

        return vehicle


    @staticmethod
    def get_all_vehicles(
        db: Session
    ):

        return db.query(Vehicle).all()


    @staticmethod
    def get_vehicle_by_id(
        db: Session,
        vehicle_id: int
    ):

        return (
            db.query(Vehicle)
            .filter(Vehicle.id == vehicle_id)
            .first()
        )


    @staticmethod
    def update_vehicle(
        db: Session,
        vehicle_id: int,
        vehicle_data
    ):

        vehicle = (
            db.query(Vehicle)
            .filter(Vehicle.id == vehicle_id)
            .first()
        )

        if not vehicle:
            return None

        for key, value in vehicle_data.dict().items():

            setattr(vehicle, key, value)

        db.commit()

        db.refresh(vehicle)

        return vehicle


    @staticmethod
    def delete_vehicle(
        db: Session,
        vehicle_id: int
    ):

        vehicle = (
            db.query(Vehicle)
            .filter(Vehicle.id == vehicle_id)
            .first()
        )

        if not vehicle:
            return None

        db.delete(vehicle)

        db.commit()

        return vehicle