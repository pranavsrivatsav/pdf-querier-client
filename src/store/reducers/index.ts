import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
// import other reducers here

const rootReducer = combineReducers({
  // add reducers here
});

const store = configureStore({
  reducer: rootReducer,
  // add other middleware or enhancers here if needed
});

export default store;
