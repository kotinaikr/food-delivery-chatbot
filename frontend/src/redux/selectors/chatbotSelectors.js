import { createSelector } from "@reduxjs/toolkit";

const selectChatbotState = (state) => state.chatbot;

export const selectQuestion = createSelector(
  selectChatbotState,
  (chatbot) => chatbot.question
);

export const selectResponse = createSelector(
  selectChatbotState,
  (chatbot) => chatbot.response
);

export const selectOrders = createSelector(
  selectChatbotState,
  (chatbot) => chatbot.orders
);

export const selectSelectedOrder = createSelector(
  selectChatbotState,
  (chatbot) => chatbot.selectedOrder
);
