import axios from 'axios'
import QS from 'qs'
const get = ({url}) => {
  return new Promise((resolve, reject) => {
    axios({
      url
    })
    .then(result => {
      resolve(result)
    })
    .then(error => {
      reject(error)
    })
  })
}
const post=(url, params)=>{
  return new Promise((resolve, reject) => {
    axios.post(url, QS.stringify(params))
      .then(res => {
          resolve(res);
      })
      .catch(err =>{
          reject(err)
      })
  });
}

export {
  get,
  post
}