import React from 'react';
import {ProductClassify} from './classifyStyle';

function Product(props) {
  const arr=[
    {
      name:'产品',
      list:[
        {
          productId:'p01',
          productName:'手表'
        },
        {
          productId:'p02',
          productName:'手环'
        },
        {
          productId:'p03',
          productName:'运动周边'
        },
        {
          productId:'p04',
          productName:'配件'
        }
      ]
    },
    
  ]
  return (
    <ProductClassify>
      {
        arr.map((value,index)=>{
          return(
            <div className='product' key={index}>
              <p>{value.name}<p></p></p>
              <div>
                <ul>
                  {
                    value.list.map(v=>{
                      return (
                        <li>
                        <input type="checkbox" id={v.productId}/>
                        <label htmlFor={v.productId}>{v.productName}</label>
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