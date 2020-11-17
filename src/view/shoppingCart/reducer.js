import {INCREAMENT,DECREMENT,LOADDATA,CHANGENUM,CHANGLIST,FAVDATA,CATEDATA,ORDERDATA} from './actionTypes'

const defaultState = {
  num:0,
  list:[],
  checkList:[],
  total:0,
  favList:[],
  cate:[],
  orderList:[]
}

const reducer = (state = defaultState, action)=> {
  console.log(action)
  switch(action.type) {
    case LOADDATA:
      return{
        ...state,
        list:action.list.data,
        total:action.list.total
      }

    case ORDERDATA:
      return{
        ...state,
        orderList:action.list
      }

    case FAVDATA:
      return{
        ...state,
        favList:action.list
      }

    case CATEDATA:
      return{
        ...state,
        cate:action.list
      }

    case INCREAMENT:
      console.log("-----------------");
      return{
        ...state,
        num : action.num+1,
      }

    case CHANGENUM:
      console.log(action);
      break

    case DECREMENT:
      return {
        ...state,
        num: action.num-1
      }
      
    case CHANGLIST:
      return {
        ...state,
        checkList:action.list
      }
      
    default:
      return state
  }
}

export default reducer