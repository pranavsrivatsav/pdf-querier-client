import { combineReducers } from 'redux';
// import other reducers here
import { querierApi } from '../../services/querier';
import fileReducer from './fileReducer';

const rootReducer = combineReducers({
  // add reducers here
  [querierApi.reducerPath]: querierApi.reducer,
  file: fileReducer,
});

export default rootReducer;
