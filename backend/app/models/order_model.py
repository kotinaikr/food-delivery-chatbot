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

print("Sample Orders Inserted Successfully")