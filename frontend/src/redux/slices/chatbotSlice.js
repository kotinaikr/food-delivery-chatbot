import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  question: "",
  response: null,
  orders: [],
  selectedOrder: null,
};

const chatbotSlice = createSlice({
  name: "chatbot",
  initialState,
  reducers: {
    askQuestionRequest: (state, { payload }) => {
      state.question = payload;
    },
    askQuestionSuccess: (state, { payload }) => {
      state.question = payload.question;
      state.response = payload.response;
    },
    fetchOrdersRequest: () => {},
    fetchOrdersSuccess: (state, { payload }) => {
      state.orders = payload;
    },
    fetchOrderByIdRequest: (state) => {
      state.selectedOrder = null;
    },
    fetchOrderByIdSuccess: (state, { payload }) => {
      state.selectedOrder = payload;
    },
    clearAskResponse: (state) => {
      state.response = null;
    },
  },
});

export const {
  askQuestionRequest,
  askQuestionSuccess,
  fetchOrdersRequest,
  fetchOrdersSuccess,
  fetchOrderByIdRequest,
  fetchOrderByIdSuccess,
  clearAskResponse,
} = chatbotSlice.actions;

export default chatbotSlice.reducer;
