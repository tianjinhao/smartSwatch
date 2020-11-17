import { combineReducers } from 'redux';
import { reducer as regReducer } from '@ad/reg/store';
import { reducer as gooddetail } from '../view/Tbuy'
import { reducer as classify} from '@v/shoppingList'



export default combineReducers({
  register: regReducer,
  gooddetail,
  classify
})