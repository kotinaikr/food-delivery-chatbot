import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pendingRequests: 0,
  globalError: null,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.pendingRequests += 1;
    },
    stopLoading: (state) => {
      state.pendingRequests = Math.max(0, state.pendingRequests - 1);
    },
    setGlobalError: (state, { payload }) => {
      state.globalError = payload;
    },
    clearGlobalError: (state) => {
      state.globalError = null;
    },
  },
});

export const { startLoading, stopLoading, setGlobalError, clearGlobalError } =
  appSlice.actions;

export default appSlice.reducer;
