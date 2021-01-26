import {request} from './request'

function homeGetMultidata(){
  return request({
    url:'/home/multidata'
  })
}

export default homeGetMultidata