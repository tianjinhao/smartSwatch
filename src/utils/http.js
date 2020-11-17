import axios from 'axios';



const http = axios.create({
  // baseURL: 'http://8.131.73.21:8080/'
  baseURL: 'http://10.9.27.162:8080/'
})



http.interceptors.request.use(function(config) {



	// 在发送请求之前做些什么
	if (config.method === 'post') {
		config.headers = {
      'Content-Type': 'application/json;charset=utf-8',
    }
	}
	// console.log(config)
	return config;
}, function(error) {
	// 对请求错误做些什么
	return Promise.reject(error);
});




// 响应拦截器
http.interceptors.response.use(function (response) {
  // 所有请求的响应都会回到响应拦截器
  // 可以再这里统一处理错误
  const { data } = response
  // 代码能执行到这里, 表示结果是成功的
  return data
})



export default http