import {INCREAMENT,DECREMENT} from './actionTypes'

const defaultState = {
  num:0
}

const reducer = (state = defaultState, action)=> {
  console.log('+++++++++++++++++++++++++');
  switch(action.type) {
    case INCREAMENT:
      return{
        num : action.num+1,
      }
    case DECREMENT:
      return {
        num: action.num - 1
      }
    default:
      return state
  }
}

export default reducer