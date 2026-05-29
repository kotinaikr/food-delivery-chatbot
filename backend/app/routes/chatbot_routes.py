from fastapi import APIRouter

from services.chatbot_service import ask_gemini
from config.db import orders_collection

router = APIRouter()

@router.get("/ask")
def ask_chatbot(question: str):

    response = ask_gemini(question)

    return {
        "question": question,
        "response": response
    }

@router.get("/orders")
def get_orders():

    orders = list(
        orders_collection.find({}, {"_id": 0})
    )

    return orders

@router.get("/orders/{order_id}")
def get_order(order_id: int):

    order = orders_collection.find_one(
        {"order_id": order_id},
        {"_id": 0}
    )

    return order