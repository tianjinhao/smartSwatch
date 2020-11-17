const defaultState = {
  evaluateType: "good"
}

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'Good':
      return {
        ...state,
        evaluateType: "good"
      }
    case 'Medium':
      return {
        ...state,
        evaluateType: "medium"
      }
    case 'Bad':
      return {
        ...state,
        evaluateType: "bad"
      }
    default: 
      return state
  }
}

export default reducer;