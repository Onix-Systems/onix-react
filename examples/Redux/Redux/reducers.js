import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import userReducer from './userReducer';

// Combine multiple reducers into a root reducer
const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
});

export default rootReducer;
