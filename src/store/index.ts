import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import { querierApi } from "../services/querier";

const store = configureStore({
  reducer: rootReducer,
  // add other middleware or enhancers here if needed
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(querierApi.middleware)
});

export default store;

// 🔹 Define RootState type based on store
export type RootState = ReturnType<typeof store.getState>;
// 🔹 Define AppDispatch type for dispatch
export type AppDispatch = typeof store.dispatch;
