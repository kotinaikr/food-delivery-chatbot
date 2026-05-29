from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routes.chatbot_routes import router #to run under backend folder --> cd backend/app --> poetry run uvicorn main:app --reload
# from app.routes.chatbot_routes import router #to run under app folder --> cd backend --> poetry run uvicorn app.main:app --reload

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router)

@app.get("/")
def home():

    return {
        "message": "Food Delivery Backend Running"
    }