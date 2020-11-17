import React,{useState} from 'react';
import HomePage from './HomePage.jsx'
import Classify from './Classify.jsx'
import {ShopContain} from './listStyle.js'
import Sort from './Sort'
import ShopList from './ShopList'

function TotalBan(){
  const [total,setTotal]=useState(0)
  const getTotalData=(data)=>{  
      setTotal(data)
  }
  return (
    <ShopContain >
      <HomePage></HomePage>
      <Classify></Classify>
      <Sort total={total}></Sort>
      <ShopList getData={getTotalData}></ShopList>
    </ShopContain>
  )
}

// class TotalBan extends Component {
//   state={
//     total:null
//   }
//   getData = (data)=>{
//     console.log(data)
//     // this.forceUpdate(this.state.total=data)
//     // this.setState({
//     //   total: data
//     // })
// }
  
//   render() {
//     return (
//       <ShopContain >
//         <HomePage></HomePage>
//         <Classify></Classify>
//         <Sort total={this.state.total}></Sort>
//         <ShopList getData={(data)=>this.getData(data)}></ShopList>
//     </ShopContain>
//     );
//   }
// }


export default TotalBan;