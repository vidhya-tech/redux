// rootReducer.js
import { combineReducers } from 'redux';
import counterReducer from './counterSlice';

const rootReducers = combineReducers({
  counter: counterReducer,
  
});

export default rootReducers;
