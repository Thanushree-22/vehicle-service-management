import sys
import os

sys.path.append(
    os.path.abspath(
        os.path.join(
            os.path.dirname(__file__),
            ".."
        )
    )
)
from fastapi.testclient import TestClient

from app.main import app


client = TestClient(app)


def test_create_vehicle():

    response = client.post(
        "/vehicles/",
        json={

            "vehicle_number":
            "KA01TEST123",

            "owner_name":
            "Test User",

            "brand":
            "Toyota",

            "model":
            "Innova",

            "year": 2024
        }
    )

    assert response.status_code == 200