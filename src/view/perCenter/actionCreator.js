const decreOffset = (offset)=>{
  return {
    type:'decreOffset',
    offset:offset
  }
}
const increOffset = (offset)=>{
  return {
    type:'increOffset',
    offset:offset
  }
}


export default {
  decreOffset,
  increOffset,
}