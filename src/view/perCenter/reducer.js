const defaultState={
  userId:localStorage.getItem("userId"),
  limit:3,
  offset:1,
}

const reducer = (state = defaultState,action)=>{
  switch(action.type){
    case 'increOffset':
      return {
        ...state,
        offset:action.offset
      }
    case 'decreOffset':
      return {
        ...state,
        offset:action.offset
      }
    default:
      return state;
  }
}
export default reducer