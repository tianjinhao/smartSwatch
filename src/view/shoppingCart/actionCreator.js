import {INCREAMENT,DECREMENT} from './actionTypes'

const increament = (num) =>{
  console.log(5555555555);
  return {
    type:INCREAMENT,
    num
  }
}

const decreament = (num) =>{
  return {
    type:DECREMENT,
    num
  }
}
// eslint-disable-next-line
export default {
  increament,
  decreament
}