import { combineReducers } from 'redux';
import { yardSizeReducer } from './yardSizeReducer';

const rootReducer = combineReducers({
  currentYardSize: yardSizeReducer,
});

export default rootReducer;