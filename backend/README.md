# Food Delivery Chatbot Backend

AI-Powered Food Delivery Chatbot Backend built using FastAPI, MongoDB Atlas, PyMongo, Gemini AI, LangChain, and Poetry.

---

# Tech Stack

## Backend

* Python 3.12+
* FastAPI
* Uvicorn
* Poetry

## Database

* MongoDB Atlas
* PyMongo

## AI

* Gemini 2.5 Flash
* LangChain

## API Documentation

* Swagger UI
* OpenAPI

---

# System Architecture

```text
React Frontend
        ↓
Redux Toolkit + Saga
        ↓
FastAPI Backend
        ↓
Service Layer
        ↓
Gemini AI + LangChain
        ↓
PyMongo
        ↓
MongoDB Atlas
```

---

# Project Structure

```text
backend/
│
├── app/
│   │
│   ├── main.py
│   │
│   ├── config/
│   │   └── db.py
│   │
│   ├── routes/
│   │   ├── chatbot_routes.py
│   │   └── order_routes.py
│   │
│   ├── services/
│   │   ├── chatbot_service.py
│   │   └── order_service.py
│   │
│   ├── repositories/
│   │   └── order_repository.py
│   │
│   ├── models/
│   │   └── order_model.py
│   │
│   ├── middleware/
│   │
│   └── utils/
│
├── .env
├── pyproject.toml
├── poetry.lock
├── README.md
└── .gitignore
```

---

# Prerequisites

Install the following software:

* Python 3.12+
* Git
* Poetry
* MongoDB Atlas Account
* Gemini API Key

---

# Poetry Setup

## Install Poetry

### Windows PowerShell

```powershell
(Invoke-WebRequest -Uri https://install.python-poetry.org -UseBasicParsing).Content | py -
```

Verify installation:

```bash
poetry --version
```

Example:

```text
Poetry (version 2.x.x)
```

---

## Configure Poetry

Create virtual environment inside project:

```bash
poetry config virtualenvs.in-project true
```

---

## Install Dependencies

```bash
poetry install
```

---

## Poetry 2.x Notes

Poetry 2.x does not include:

```bash
poetry shell
```

by default.

Recommended approach:

```bash
poetry run <command>
```

Example:

```bash
poetry run uvicorn app.main:app --reload
```

---

## Optional Shell Plugin

```bash
poetry self add poetry-plugin-shell
```

Then:

```bash
poetry shell
```

works normally.

---

# Install Backend Dependencies

```bash
poetry add fastapi
poetry add uvicorn
poetry add pymongo
poetry add python-dotenv
poetry add langchain
poetry add langchain-google-genai
poetry add google-generativeai
```

---

# Environment Variables

Create `.env`

```env
GOOGLE_API_KEY=YOUR_GEMINI_API_KEY

MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/
```

---

# MongoDB Atlas Setup

## Create MongoDB Atlas Account

Create a free account and cluster.

---

## Create Database User

Example:

```text
Username: admin
Password: admin123
```

---

## Configure Network Access

Allow:

```text
0.0.0.0/0
```

---

## Copy Connection String

Example:

```text
mongodb+srv://admin:password@cluster.mongodb.net/
```

Update `.env`

```env
MONGO_URI=mongodb+srv://admin:password@cluster.mongodb.net/
```

---

# Database Setup

## Database Name

```text
food_delivery
```

---

## Collections

```text
orders
users
chat_history
restaurants
```

---

# MongoDB Connection

## app/config/db.py

```python
from pymongo import MongoClient
from dotenv import load_dotenv
import os

load_dotenv()

MONGO_URI = os.getenv("MONGO_URI")

client = MongoClient(MONGO_URI)

db = client["food_delivery"]

orders_collection = db["orders"]
```

---

# Sample Order Data

## app/models/order_model.py

```python
from config.db import orders_collection

sample_orders = [

    {
        "order_id": 101,
        "customer_name": "Ravi",
        "restaurant": "Pizza Hut",
        "amount": 450,
        "status": "Delivered"
    },

    {
        "order_id": 102,
        "customer_name": "Anu",
        "restaurant": "KFC",
        "amount": 320,
        "status": "Preparing"
    },

    {
        "order_id": 103,
        "customer_name": "Kiran",
        "restaurant": "Dominos",
        "amount": 600,
        "status": "Cancelled"
    }
]

orders_collection.insert_many(sample_orders)

print("Orders Inserted Successfully")
```

Execute:

```bash
poetry run python app/models/order_model.py
```

---

# Gemini Service

## app/services/chatbot_service.py

```python
from langchain_google_genai import ChatGoogleGenerativeAI

llm = ChatGoogleGenerativeAI(
    model="gemini-2.5-flash",
    temperature=0
)

def ask_gemini(question):

    response = llm.invoke(question)

    return response.content
```

---

# API Routes

## Chatbot Routes

```text
GET /ask
```

Example:

```text
/ask?question=What is AI?
```

---

## Orders Routes

```text
GET /orders

GET /orders/{order_id}
```

Example:

```text
/orders/101
```

---

# Main Application

## app/main.py

```python
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routes.chatbot_routes import router

app = FastAPI(
    title="Food Delivery Chatbot API",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router)

@app.get("/")
def health_check():

    return {
        "message": "Food Delivery Backend Running"
    }
```

---

# Run Application

```bash
poetry run uvicorn app.main:app --reload
```

Application URL:

```text
http://127.0.0.1:8000
```

---

# Swagger Documentation

FastAPI automatically generates API documentation.

Swagger UI:

```text
http://127.0.0.1:8000/docs
```

ReDoc:

```text
http://127.0.0.1:8000/redoc
```

OpenAPI JSON:

```text
http://127.0.0.1:8000/openapi.json
```

---

# API Testing

## Health Check

```http
GET /
```

Response:

```json
{
  "message": "Food Delivery Backend Running"
}
```

---

## Ask Gemini

```http
GET /ask
```

Query Parameter:

```text
question=What are the benefits of food delivery apps?
```

---

## Get All Orders

```http
GET /orders
```

---

## Get Order Details

```http
GET /orders/101
```

---

# Development Flow

```text
Frontend Request
        ↓
FastAPI Route
        ↓
Service Layer
        ↓
Gemini / MongoDB
        ↓
JSON Response
        ↓
Frontend UI
```

---

# Future Enhancements

* JWT Authentication
* Role Based Access
* Chat History
* Docker Support
* Docker Compose
* GitHub Actions CI/CD
* Kubernetes Deployment
* Redis Caching
* Async MongoDB Support
* Unit Testing
* Integration Testing

---

# Useful Commands

Install dependencies:

```bash
poetry install
```

Run application:

```bash
poetry run uvicorn app.main:app --reload
```

Run Python script:

```bash
poetry run python app/models/order_model.py
```

View environment:

```bash
poetry env info
```

List environments:

```bash
poetry env list
```

Add dependency:

```bash
poetry add package_name
```

Update dependencies:

```bash
poetry update
```

---

## Run FastAPI Server

Navigate to backend root:

```bash
cd backend
```

Start the FastAPI application:

```bash
poetry run uvicorn app.main:app --reload
```

Application URL:

```text
http://127.0.0.1:8000
```

Swagger UI:

```text
http://127.0.0.1:8000/docs
```

ReDoc:

```text
http://127.0.0.1:8000/redoc
```

# Author

Koti Naik R

Enterprise AI-Powered Food Delivery Chatbot Backend using FastAPI, MongoDB Atlas, PyMongo, Gemini AI, LangChain, Poetry, and Swagger.
