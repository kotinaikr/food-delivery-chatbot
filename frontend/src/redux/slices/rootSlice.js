import { combineReducers } from "@reduxjs/toolkit";

import appReducer from "./appSlice";
import chatbotReducer from "./chatbotSlice";

const rootReducer = combineReducers({
  app: appReducer,
  chatbot: chatbotReducer,
});

export default rootReducer;
