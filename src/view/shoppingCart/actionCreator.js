import {LOADDATA,FAVDATA,CATEDATA,ORDERDATA} from './actionTypes'
import axios from 'axios'


const changenum = (id,userid,num) =>{
  return async (dispatch) => {
    axios({
      method: 'POST',
      url: 'http://10.9.27.162:8080/cart/changeCommodityNum',
      data: {
        "commodityId":`${id}`,
        "userId": `${userid}`,
        "commodityNum": `${num}`,
      }
    }).then(function (response) {
      dispatch(loadDataAsync())
    }).catch(function (error) {
      console.log(error);
    })
  }
}

const increament = (id,userid,num,page) =>{
  num = num+1;
  return async (dispatch) => {
    axios({
    method: 'POST',
    url: 'http://10.9.27.162:8080/cart/changeCommodityNum',
    data: {
      "commodityId":`${id}`,
      "userId": 1,
      "commodityNum": `${num}`,
    }
  }).then(function (response) {
    dispatch(loadDataAsync(1,4,page))
  }).catch(function (error) {
    console.log(error);
  })
}
}

const decreament = (id,userid,num,page) =>{
  console.log(id);
  console.log(userid);
  console.log(num);
  num = num-1;
  if(num<=0){
    num=0;
  }
  return async (dispatch) => {
    axios({
    method: 'POST',
    url: 'http://10.9.27.162:8080/cart/changeCommodityNum',
    data: {
      "commodityId":id,
      "userId": 1,
      "commodityNum": num,
    }
  }).then(function (response) {
    dispatch(loadDataAsync(1,4,page))
  }).catch(function (error) {
    console.log(error);
  })
}
}



const loadDataSync = list =>{
  return{
    type:LOADDATA,
    list
  }
} 

const deleteAsync = (userid,cid) =>{
  let arr=[]
  arr.push(cid)
  return async (dispatch) => {
    axios({
      method: 'POST',
      url: 'http://10.9.27.162:8080/cart/deleteCommodityFromcart',
      data: {
        "userId": userid,
        "commodityIds": arr
      }
    }).then(function (response) {
      dispatch(loadDataAsync(userid,5,1))
      arr=[]
    }).catch(function (error) {
      console.log(error);
    })
  }
}

const loadDataAsync = (userid,limit,offset) =>{
  return async (dispatch) => {
      axios({
      method: 'POST',
      url: 'http://10.9.27.162:8080/cart/showCart',
      data: {
        "userId": 1,
        "limit": limit,
        "offset": offset
      }
    }).then(function (response) {
      console.log(response.data);
      dispatch(loadDataSync(response.data))
    }).catch(function (error) {
      console.log(error);
    })
  }
}

const changlist = () =>{
 return async (dispatch) => {
      axios({
      method: 'POST',
      url: 'http://8.131.73.21:8080/cart/showCart',
      data: {
        "userId": "1",
        "limit": "5",
        "offset": "1"
      }
    }).then(function (response) {
      dispatch(loadDataSync(response.data))
    }).catch(function (error) {
      console.log(error);
    })
  }
} 

const favSync = list=>{
  return{
    type:FAVDATA,
    list
  }
} 

const favAsync = () =>{
  return async (dispatch) => {
       axios({
       method: 'POST',
       url: 'http://10.9.27.162:8080/favorite/myFav',
       data: {
         "userId": "1",
         "limit": "8",
         "offset": "1"
       }
     }).then(function (response) {
       console.log(response);
       dispatch(favSync(response.data))
     }).catch(function (error) {
       console.log(error);
     })
   }
 } 

 const cateSync = list =>{
   return{
     type:CATEDATA,
     list
   }
 }

 const cateAsync = () =>{
  return async (dispatch) => {
       axios({
       method: 'POST',
       url: 'http://8.131.73.21:8080/favorite/findFav',
       data: {
         "userId": "1",
       }
     }).then(function (response) {
       dispatch(cateSync(response.data))
     }).catch(function (error) {
       console.log(error);
     })
   }
 } 
 const orderSync = list =>{
  return{
    type:ORDERDATA,
    list
  }
 }
 const orderAsync = () =>{
      return async (dispatch) => {
          axios({
          method: 'POST',
          url: 'http://10.9.27.162:8080/indent/getIndent',
          data: {
            "userId": "1",
            "limit":'10',
            "offset":"1",
            "indentStatus":""
          }
        }).then(function (response) {
          dispatch(orderSync(response.data))
        }).catch(function (error) {
          console.log(error);
        })
      }
    } 
  const confirm = (userId,indentId) =>{
    return async (dispatch) => {
      axios({
        method: 'POST',
        url: 'http://10.9.27.162:8080//indent/confirmReceipt',
        data: {
          "userId": userId,
          "indentId":indentId
        }
      }).then(function (response) {
        dispatch(orderAsync())
      }).catch(function (error) {
        console.log(error);
      })
    }
 }

    const delOrder = (userId,indentId) =>{
      return async (dispatch) => {
        axios({
        method: 'POST',
        url: 'http://10.9.27.162:8080/indent/deleteIndent',
        data: {
          "userId": userId,
          "indentId":indentId
        }
      }).then(function (response) {
        dispatch(orderAsync())
      }).catch(function (error) {
        console.log(error);
      })
    }
 }

const celOrder = (userId,indentId) =>{
  return async (dispatch) => {
    axios({
      method: 'POST',
      url: 'http://10.9.27.162:8080/indent/cancelIndent',
      data: {
        "userId": userId,
        "indentId":indentId
      }
    }).then(function (response) {
      dispatch(orderAsync())
    }).catch(function (error) {
      console.log(error);
    })
  }
}

// eslint-disable-next-line
export  {
  increament,
  decreament,
  loadDataAsync,
  deleteAsync,
  changenum,
  changlist,
  favAsync,
  cateAsync,
  orderAsync,
  delOrder,
  celOrder,
  confirm
}