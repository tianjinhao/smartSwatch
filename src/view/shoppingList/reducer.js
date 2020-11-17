const defaultState={
  limit:12,
  offset:1,
  products:[],
  functions:[],
  styles:[],
  textures:[],
  colors:[],
  fitPeoples:[],
  sort:null,
  minPrice:null,
  maxPrice:null
}
const reducer = (state=defaultState,action)=>{
  switch(action.type){
    case 'changeProduct':
      return {
        ...state,
        products:action.products
      }
    case 'changeFunc':
      return {
        ...state,
        functions:action.functions
      }
    case 'changeStyle':
      return {
        ...state,
        styles:action.styles
      }
    case 'changeTexture':
      return {
        ...state,
        textures:action.textures
      }
    case 'changeColor':
      return {
        ...state,
        colors:action.colors
      }   
    case 'changePeople':
      return {
        ...state,
        fitPeoples:action.fitPeoples
      }
    case 'changeOffset':
      return {
        ...state,
        offset:action.offset
      }  
    case 'changeSort':
      return {
        ...state,
        sort:action.sort
      }
    case 'changeMinPrice':
      return {
        ...state,
        minPrice:action.minPrice
      }
    case 'changeMaxPrice':
      return {
        ...state,
        maxPrice:action.maxPrice
      }
    case 'changeIncreOffset':
      return {
        ...state,
        offset:action.offset
      }
    case 'changeDecreOffset':
      return {
        ...state,
        offset:action.offset
      }
    default:
      return state
  }
}

export default reducer