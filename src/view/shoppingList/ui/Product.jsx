import React,{useEffect,useState}from 'react';
import {ProductClassify} from './classifyStyle';
import { useDispatch,useSelector } from 'react-redux'
import { actionCreator as ac } from '../index'
// import http from '@u/http'
import axios from 'axios'
function Product(props) {
  const state  = useSelector(state => state.classify)
  // console.log(state);
  let dispatch = useDispatch()
  const [arr,setArr]= useState([])
  // const [list,setList] = useState()
  

  const loadClassifyData =async ()=>{
    let result =await axios.get('http://10.9.27.159:8080/commodity/getCommodityClassify')
    // console.log(result);
    setArr(result.data.data)
  }
  

  useEffect(()=>{
    loadClassifyData();
  },[])

 const changeArr = (id,type,action)=>{
   let bool = type.includes(id);
   if(!bool){
     dispatch(action([...type,id]))
   }else{
     let index = type.indexOf(id);
     type.splice(index,1);
     dispatch(action([...type]))
   }
 }

  const selectClick = (name,id) =>{
    return ()=>{
      let { products,functions,styles,textures,colors,fitPeoples } = state;
      switch(name){
        case '产品':
          changeArr(id,products,ac.changeProduct);
          break;
        case '功能':
          changeArr(id,functions,ac.changeFunc);
          break;
        case '风格':
          changeArr(id,styles,ac.changeStyle);
          break;
        case '材质':
          changeArr(id,textures,ac.changeTexture);
          break;
        case '颜色':
          changeArr(id,colors,ac.changeColor);
          break;
        case '适用人群':
          changeArr(id,fitPeoples,ac.changePeople);
          break;          
        default:
          break
      }
    }
  }


  return (
    <ProductClassify>   
      {
       arr && arr.map((value,index)=>{
          return(
            <div className='product' key={index}>
              <p>{value.name}<p></p></p>
              <div>
                <ul style={{width:`${value.list.length>4?"375px":"250px"}`}}>
                  {
                    value.list.map(v=>{
                      return (
                        <li key={v.id}>
                          <input type="checkbox" id={v.id} onClick={selectClick(value.name,v.id)}/>
                          <h5>{v.name}</h5>
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
            </div>
          )
        })
      }

      
    </ProductClassify>
  );
}

export default Product;