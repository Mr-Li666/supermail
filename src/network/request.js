import axios from 'axios'

function request(config) {
  const instance  = axios.create({
    baseURL:'http://123.207.32.32:8000',
    timeout:5000
  })

  instance.interceptors.request.use(success => {
    return success
  },err =>{
    throw new Error(err)
  })

  instance.interceptors.response.use(res =>{
    return res
  },err =>{
    throw new Error(err)
  })

  return instance(config)
}

export {request}
