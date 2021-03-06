import axios from "axios";

const instance = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 3000,
});

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token')
  if(token)config.headers.token = token;
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });
  // 统一了传参处理 
 const request = (options) => { 
  if (options.method.toLowerCase() === 'get') { 
  options.params = options.data || {} 
  } 
  return instance(options) 
  } 


export default request;
