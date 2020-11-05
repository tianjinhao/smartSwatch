import axios from '@u/http';


export const regAc = data => {
  return dispatch => {
    return axios.post('/api/user/register',data)
  }
}