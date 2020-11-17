import React,{useState} from 'react';
import {ThreeEl} from './listStyle.js'
import { message } from 'antd';
import { useDispatch,useSelector } from 'react-redux'
import { actionCreator as ac } from '../index'


function Sort(props) {
  const [CurrentIndex,setIndex] = useState(0)
  const sort =[
    {
      designation:'默认',
      index:0
    },
    {
      designation:'销量',
      index:1
    },
    {
      designation:'评价',
      index:2
    },
  ]
  const state = useSelector(state => state.classify)
  const [price,setPrice]=useState({
    min:null,
    max:null
  })
  let dispatch = useDispatch()
  const changeSort = (index)=>{
    return ()=>{
      setIndex(index)
      switch(index){
        case '0':
          state.sort=0
          dispatch(ac.changeSort(state.sort))
          break;
        case '1':
          state.sort=1
          dispatch(ac.changeSort(state.sort))
          break;
        case '2':
          state.sort=2
          dispatch(ac.changeSort(state.sort))
          break;
        default:
          break
      }
    }
  }
 
  const RegText =(text)=>{
    if(text){
      let reg=/^(0|[1-9][0-9]*)(\.\d+)?$/;
      return reg.test(text)
    }else{
      return true
    }
  }
  //按照最低价最高价检索
  const ChangeMinPrice = (e)=>{ 
    if(RegText(e.target.value)){
        setPrice({
          min:e.target.value
        })
      }else{
        message.success({
          content:'请输入正确的价格'
        })
      }
  }
  const ChangeMaxPrice = (e) =>{
    if(RegText(e.target.value)){
      setPrice({
        ...price,
        max:e.target.value
      })
    }else{
      message.success({
        content:'请输入正确的价格'
      })
    }
  }
  // console.log(props.total);
  const handleKeyDown =(e)=>{
    let min = Number(price.min) 
    let max = Number(price.max)
    if(!min) min=0
    if(!max) max=Infinity
    if(e.keyCode === 13 && min<max){
      dispatch(ac.changeMinPrice(min))
      dispatch(ac.changeMaxPrice(max))
    }
  }
  //翻页
  const decrementOffset =()=>{
    if(state.offset>1) dispatch(ac.changeDecreOffset(state.offset-1))
  }
  const increamentOffset=()=>{
    if(state.offset<Math.ceil(props.total/12))
    dispatch(ac.changeIncreOffset(state.offset+1))
  }
  return (
    <ThreeEl>
      <p className='classify'>排序:</p>
      {
        sort.map((value,i)=>{
          return (
            <span onClick={changeSort(value.index)} className={CurrentIndex===value.index?"showStyle":""} key={i}>{value.designation}</span>
          )
        })
      }
      {/* <span onClick={defaultState}>默认</span>
      <span onClick={SalesVolumeClick}>销量</span>
      <span onClick={evaluateClick}>评价</span> */}
      <span>价格 ：
        <form onKeyDown={handleKeyDown}>
          <h2>￥</h2><input value={price.min} onChange={ChangeMinPrice}   type="text"/>&nbsp;-&nbsp;
          <h2>￥</h2><input  value={price.max}  onChange={ChangeMaxPrice}  type="text"/>
        </form>
      </span>
      <span>
        <p onClick={decrementOffset}>&lt;</p>
        <p className='firstPage'>{state.offset}</p>
        /
        <p className='lastPage'>{Math.ceil(props.total/12)>0 ?Math.ceil(props.total/12) : 1}</p>
        <p onClick={increamentOffset}>&gt;</p>
      </span>
    </ThreeEl>
  );
}

export default Sort;