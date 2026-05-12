from fastapi import APIRouter
from fastapi import Depends

from sqlalchemy.orm import Session

from app.dependencies import get_db

from app.controllers.component_controller import ( ComponentController )

from app.schemas.component_schema import ( ComponentCreate, ComponentResponse)

router = APIRouter(
    prefix="/components",
    tags=["Components"]
)


@router.post(
    "/",
    response_model=ComponentResponse
)
def create_component(
    component: ComponentCreate,
    db: Session = Depends(get_db)
):

    return ComponentController.create_component(
        db,
        component
    )


@router.get(
    "/",
    response_model=list[ComponentResponse]
)
def get_all_components(
    db: Session = Depends(get_db)
):

    return ComponentController.get_all_components(
        db
    )


@router.get(
    "/{component_id}",
    response_model=ComponentResponse
)
def get_component_by_id(
    component_id: int,
    db: Session = Depends(get_db)
):

    return ComponentController.get_component_by_id(
        db,
        component_id
    )


@router.put(
    "/{component_id}",
    response_model=ComponentResponse
)
def update_component(
    component_id: int,
    component: ComponentCreate,
    db: Session = Depends(get_db)
):

    return ComponentController.update_component(
        db,
        component_id,
        component
    )


@router.delete(
    "/{component_id}"
)
def delete_component(
    component_id: int,
    db: Session = Depends(get_db)
):

    return ComponentController.delete_component(
        db,
        component_id
    )