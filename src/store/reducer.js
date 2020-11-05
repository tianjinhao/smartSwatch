import { combineReducers } from 'redux';
import { reducer as regReducer } from '@ad/reg/store';

export default combineReducers({
  register: regReducer
})