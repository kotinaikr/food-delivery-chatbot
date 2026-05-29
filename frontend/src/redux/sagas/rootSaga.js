import { all, fork } from "redux-saga/effects";

import chatbotSaga from "./chatbotSaga";

export default function* rootSaga() {
  yield all([fork(chatbotSaga)]);
}
