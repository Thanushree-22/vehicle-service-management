from sqlalchemy.orm import Session

from app.repositories.component_repository import ( ComponentRepository )

from app.schemas.component_schema import ( ComponentCreate )

from app.utils.exceptions import ( not_found_exception )


class ComponentController:

    @staticmethod
    def create_component(
        db: Session,
        component: ComponentCreate
    ):

        return ComponentRepository.create_component(
            db,
            component
        )


    @staticmethod
    def get_all_components(
        db: Session
    ):

        return ComponentRepository.get_all_components(
            db
        )


    @staticmethod
    def get_component_by_id(
        db: Session,
        component_id: int
    ):

        component = (
            ComponentRepository.get_component_by_id(
                db,
                component_id
            )
        )

        if not component:
            not_found_exception(
                "Component not found"
            )

        return component


    @staticmethod
    def update_component(
        db: Session,
        component_id: int,
        component_data: ComponentCreate
    ):

        component = (
            ComponentRepository.update_component(
                db,
                component_id,
                component_data
            )
        )

        if not component:
            not_found_exception(
                "Component not found"
            )

        return component


    @staticmethod
    def delete_component(
        db: Session,
        component_id: int
    ):

        component = (
            ComponentRepository.delete_component(
                db,
                component_id
            )
        )

        if not component:
            not_found_exception(
                "Component not found"
            )

        return {
            "message": "Component deleted successfully"
        }