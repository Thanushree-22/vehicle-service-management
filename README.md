# Vehicle Service Management System

A full-stack Vehicle Service Management application built using FastAPI, MySQL, Angular, and Ionic. The system helps manage vehicles, service components, issues, invoices, and revenue analytics through a modern dashboard interface.

---

# Features

## Vehicle Management
- Add new vehicles
- View all vehicles
- Delete vehicles
- Vehicle validation handling
- Toast notifications for actions

## Component Management
- Add service components
- Track stock quantity
- Manage repair/new pricing
- Component status indicators

## Issue Management
- Create service issues
- Update issue status
- Track pending/in-progress/completed issues
- Delete issues
- Dynamic status color cards

## Invoice Management
- Generate invoices from issues
- Prevent duplicate invoice generation
- Auto billing calculation
- Payment status tracking

## Revenue Analytics
- Total revenue tracking
- Daily revenue analytics
- Monthly revenue analytics
- Yearly revenue analytics
- Revenue chart visualization using Chart.js

## Dashboard
- Real-time statistics cards
- Revenue overview
- Pending issues tracking
- Invoice statistics
- Recent activity section
- Navigation between modules

## Testing
- Backend unit testing using pytest
- FastAPI TestClient integration
- API endpoint validation

---

# Tech Stack

## Frontend
- Angular
- Ionic Framework
- TypeScript
- SCSS
- Chart.js

## Backend
- FastAPI
- SQLAlchemy
- Pydantic
- MySQL
- Pytest

---

# Project Structure

```bash
vehicle-service-management/
│
├── backend/
│   ├── app/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── repositories/
│   │   ├── routes/
│   │   ├── schemas/
│   │   ├── services/
│   │   └── utils/
│   │
│   ├── tests/
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   └── package.json
```

---

# Backend Setup

## Create Virtual Environment

```bash
python -m venv venv
```

## Activate Virtual Environment

### Windows

```bash
venv\Scripts\activate
```

## Install Dependencies

```bash
pip install -r requirements.txt
```

## Run Backend Server

```bash
uvicorn app.main:app --reload
```

Backend runs at:

```bash
http://127.0.0.1:8000
```

Swagger API Docs:

```bash
http://127.0.0.1:8000/docs
```

---

# Frontend Setup

## Install Dependencies

```bash
npm install
```

## Run Frontend

```bash
ionic serve
```

Frontend runs at:

```bash
http://localhost:8100
```

---

# Database

Database used:

```bash
MySQL
```

Main Tables:
- vehicles
- components
- issues
- invoices
- invoice_items

---

# API Modules

## Vehicles API
- Create vehicle
- Get all vehicles
- Get vehicle by ID
- Update vehicle
- Delete vehicle

## Components API
- Create component
- Get all components
- Delete component

## Issues API
- Create issue
- Get issues
- Update issue status
- Delete issue

## Invoices API
- Generate invoice
- Get all invoices
- Get invoice by ID

## Revenue API
- Daily revenue
- Monthly revenue
- Yearly revenue
- Total revenue

---

# UI Highlights

- Responsive mobile-first design
- Gradient dashboard cards
- Revenue analytics chart
- Toast notifications
- Status-based issue colors
- Professional Ionic UI components

---

# Unit Testing

Run tests using:

```bash
pytest
```

Current test coverage includes:
- Vehicle API testing
- Endpoint validation using FastAPI TestClient

---

# Future Improvements

- Authentication & Authorization
- Role-based access
- PDF invoice generation
- Search & filters
- Export reports
- Email notifications
- Cloud deployment

---

# Author
Thanushree PS

