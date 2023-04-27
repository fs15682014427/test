import axios from 'axios'

const baseApiUrl = ''

const instance = axios.create({
  baseURL: baseApiUrl,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
})

instance.interceptors.request.use(
  (config) => {
    // 在请求发出之前进行一些操作，比如添加token等
    return config
  },
  (error) => {
    // 处理请求错误
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  (response) => {
    // 在响应数据之前进行一些操作，比如判断状态码是否正常等
    return response
  },
  (error) => {
    // 处理响应错误
    return Promise.reject(error)
  }
)

const request = (options) => {
  // 对请求进行封装
  return instance(options)
    .then((res) => {
      return res.data
    })
    .catch((error) => {
      throw new Error(error)
    })
}

export default request
