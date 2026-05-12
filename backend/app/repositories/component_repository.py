from sqlalchemy.orm import Session

from app.models.component import ( Component )


class ComponentRepository:

    @staticmethod
    def create_component(
        db: Session,
        component_data
    ):

        component = Component(
            **component_data.dict()
        )

        db.add(component)

        db.commit()

        db.refresh(component)

        return component


    @staticmethod
    def get_all_components(
        db: Session
    ):

        return db.query(Component).all()


    @staticmethod
    def get_component_by_id(
        db: Session,
        component_id: int
    ):

        return (
            db.query(Component)
            .filter(Component.id == component_id)
            .first()
        )


    @staticmethod
    def update_component(
        db: Session,
        component_id: int,
        component_data
    ):

        component = (
            db.query(Component)
            .filter(Component.id == component_id)
            .first()
        )

        if not component:
            return None

        for key, value in component_data.dict().items():

            setattr(component, key, value)

        db.commit()

        db.refresh(component)

        return component


    @staticmethod
    def delete_component(
        db: Session,
        component_id: int
    ):

        component = (
            db.query(Component)
            .filter(Component.id == component_id)
            .first()
        )

        if not component:
            return None

        db.delete(component)

        db.commit()

        return component