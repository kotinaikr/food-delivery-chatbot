import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import rootSaga from "./sagas/rootSaga";
import rootReducer from "./slices/rootSlice";
import { setupApiInterceptors } from "../services/apiClient";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

setupApiInterceptors(store);
sagaMiddleware.run(rootSaga);

export default store;
