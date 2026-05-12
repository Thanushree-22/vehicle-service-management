from fastapi import FastAPI

from fastapi.middleware.cors import (
    CORSMiddleware
)

from app.database import Base
from app.database import engine

from app.routes.component_routes import (
    router as component_router
)

from app.routes.vehicle_routes import (
    router as vehicle_router
)

from app.routes.issue_routes import (
    router as issue_router
)

from app.routes.invoice_routes import (
    router as invoice_router
)

from app.routes.revenue_routes import (
    router as revenue_router
)

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Vehicle Service Management API",
    version="1.0.0"
)

origins = [
    "http://localhost:4200",
    "http://localhost:8100"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

app.include_router(component_router)

app.include_router(vehicle_router)

app.include_router(issue_router)

app.include_router(invoice_router)

app.include_router(revenue_router)


@app.get("/")
def home():

    return {
        "message": "Vehicle Service Management API Running"
    }