import { Middleware, isAction } from "@reduxjs/toolkit";
import { SESSION_STORAGE_KEY } from "../../utils/sessionStorage";

export const RESET_STORE = "RESET_STORE";

export const sessionStorageMiddleware: Middleware =
  (store) => (next) => (action) => {
    const result = next(action);

    const updatedState = store.getState();
    sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(updatedState));

    return result;
  };

export const resetStore: Middleware = (store) => (next) => (action) => {
  if (isAction(action) && action.type === RESET_STORE) {
    store.dispatch({ type: RESET_STORE });
  }
  return next(action);
};
