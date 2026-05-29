import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  askQuestionRequest,
  fetchOrderByIdRequest,
  fetchOrdersRequest,
} from "../../redux/slices/chatbotSlice";
import {
  selectOrders,
  selectResponse,
  selectSelectedOrder,
} from "../../redux/selectors/chatbotSelectors";

import "./ChatBot.scss";

const ChatBot = () => {
  const dispatch = useDispatch();

  const [message, setMessage] = useState("");
  const [orderId, setOrderId] = useState("");

  const response = useSelector(selectResponse);
  const orders = useSelector(selectOrders);
  const selectedOrder = useSelector(selectSelectedOrder);

  useEffect(() => {
    dispatch(fetchOrdersRequest());
  }, [dispatch]);

  const handleSend = () => {
    const question = message.trim();

    if (!question) {
      return;
    }

    dispatch(askQuestionRequest(question));
  };

  const handleFetchOrder = () => {
    const id = Number(orderId);

    if (!id) {
      return;
    }

    dispatch(fetchOrderByIdRequest(id));
  };

  return (
    <div className="chatbot">
      <h1>Food Delivery Chatbot</h1>

      <section className="chatbot__section">
        <h2>Ask AI</h2>
        <div className="chatbot__controls">
          <input
            type="text"
            placeholder="Ask your question..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button type="button" onClick={handleSend}>
            Send
          </button>
        </div>

        {response && (
          <div className="chatbot__response">
            <strong>Response:</strong>
            <p>{response}</p>
          </div>
        )}
      </section>

      <section className="chatbot__section">
        <h2>Orders</h2>
        <button type="button" onClick={() => dispatch(fetchOrdersRequest())}>
          Refresh Orders
        </button>

        {orders.length > 0 && (
          <ul className="chatbot__orders">
            {orders.map((order) => (
              <li key={order.order_id}>
                #{order.order_id} — {order.customer_name} — {order.restaurant} — ₹
                {order.amount} — {order.status}
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="chatbot__section">
        <h2>Order by ID</h2>
        <div className="chatbot__controls">
          <input
            type="number"
            placeholder="Enter order ID..."
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
          />
          <button type="button" onClick={handleFetchOrder}>
            Get Order
          </button>
        </div>

        {selectedOrder && (
          <pre className="chatbot__order-detail">
            {JSON.stringify(selectedOrder, null, 2)}
          </pre>
        )}
      </section>
    </div>
  );
};

export default ChatBot;
