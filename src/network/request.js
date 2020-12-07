import axios from 'axios'
// import { config } from 'vue/types/umd'

export function request(config) {
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    tiemout: 5000
  })


  instance.interceptors.request.use(config => {
    return config
  }, err => {

  })

  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })

  return instance(config)
}