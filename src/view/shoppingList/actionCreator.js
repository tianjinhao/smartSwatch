const changeProduct = (products)=>{
  return {
    type:'changeProduct',
    products
  }
}
const changeFunc = (functions)=>{
  return {
    type:'changeFunc',
    functions
  }
}
const changeStyle = (styles)=>{
  return{
    type:'changeStyle',
    styles
  }
}
const changeTexture = (textures)=>{
  return{
    type:'changeTexture',
    textures
  }
}
const changeColor = (colors)=>{
  return{
    type:'changeColor',
    colors
  }
}
const changePeople = (fitPeoples)=>{
  return{
    type:'changePeople',
    fitPeoples
  }
}
const changeOffset = (offset)=>{
  return {
    type:'changeOffset',
    offset
  }
}
const changeSort = (sort)=>{
  return {
    type:'changeSort',
    sort
  }
}
const changeMinPrice = (minPrice)=>{
  return {
    type:'changeMinPrice',
    minPrice
  }
}
const changeMaxPrice = (maxPrice)=>{
  return {
    type:'changeMaxPrice',
    maxPrice
  }
}
const changeIncreOffset =(offset)=>{
  return {
    type:'changeIncreOffset',
    offset
  }
}
const changeDecreOffset =(offset)=>{
  return {
    type:'changeDecreOffset',
    offset
  }
}
export default {
  changeProduct,
  changeFunc,
  changeStyle,
  changeTexture,
  changeColor,
  changePeople,
  changeOffset,
  changeSort,
  changeMinPrice,
  changeMaxPrice,
  changeIncreOffset,
  changeDecreOffset
}