def validate_service_type(
    service_type: str
):

    valid_types = [
        "NEW",
        "REPAIR"
    ]

    return service_type in valid_types