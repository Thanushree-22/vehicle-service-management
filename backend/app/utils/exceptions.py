from fastapi import HTTPException


def not_found_exception(
    message: str
):

    raise HTTPException(
        status_code=404,
        detail=message
    )


def bad_request_exception(
    message: str
):

    raise HTTPException(
        status_code=400,
        detail=message
    )


def unauthorized_exception():

    raise HTTPException(
        status_code=401,
        detail="Unauthorized"
    )