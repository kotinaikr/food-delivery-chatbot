import { call, put, takeLatest } from "redux-saga/effects";

import {
  askQuestionApi,
  fetchOrderByIdApi,
  fetchOrdersApi,
} from "../chatbot/chatbotApi";
import {
  askQuestionRequest,
  askQuestionSuccess,
  fetchOrderByIdRequest,
  fetchOrderByIdSuccess,
  fetchOrdersRequest,
  fetchOrdersSuccess,
} from "../slices/chatbotSlice";

function* askQuestionSaga(action) {
  try {
    const { data } = yield call(askQuestionApi, action.payload);
    yield put(askQuestionSuccess(data));
  } catch {
    // Errors handled globally by axios interceptor
  }
}

function* fetchOrdersSaga() {
  try {
    const { data } = yield call(fetchOrdersApi);
    yield put(fetchOrdersSuccess(data));
  } catch {
    // Errors handled globally by axios interceptor
  }
}

function* fetchOrderByIdSaga(action) {
  try {
    const { data } = yield call(fetchOrderByIdApi, action.payload);
    yield put(fetchOrderByIdSuccess(data));
  } catch {
    // Errors handled globally by axios interceptor
  }
}

export default function* chatbotSaga() {
  yield takeLatest(askQuestionRequest.type, askQuestionSaga);
  yield takeLatest(fetchOrdersRequest.type, fetchOrdersSaga);
  yield takeLatest(fetchOrderByIdRequest.type, fetchOrderByIdSaga);
}
