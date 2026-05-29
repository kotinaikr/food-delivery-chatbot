import { createSelector } from "@reduxjs/toolkit";

const selectAppState = (state) => state.app;

export const selectIsGlobalLoading = createSelector(
  selectAppState,
  (app) => app.pendingRequests > 0
);

export const selectGlobalError = createSelector(
  selectAppState,
  (app) => app.globalError
);
