import axios from 'axios'
export  function request(config) {
    //创建实例
    const instance = axios.create({
      baseURL:'http://34.92.92.224:8888/',
      timeout:5000
    })
    //发送请求
    return instance(config)
}
