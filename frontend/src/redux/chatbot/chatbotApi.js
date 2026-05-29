import { api } from "../../services/api";
import { API_ENDPOINTS } from "./chatbotTypes";

export const askQuestionApi = (question) =>
  api.get(API_ENDPOINTS.ASK, { params: { question } });

export const fetchOrdersApi = () => api.get(API_ENDPOINTS.ORDERS);

export const fetchOrderByIdApi = (orderId) =>
  api.get(API_ENDPOINTS.orderById(orderId));
