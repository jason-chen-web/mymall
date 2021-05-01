// 导入插件库
import Mock from 'mockjs'

// 使用插件
Mock.mock('/api/user/login',{
      // /api/user/login是请求地址
    // /用api是为了可以统一拦截这个前缀，进行接口转发
    "status": 0,
    "data": {
      "id|1-3": 1000,
      "username": "admin",
      "email": "admin@51purse.com",
      "phone": null,
      "role": 0,
      "createTime": 1479048325000,
      "updateTime": 1479048325000
    }
})
// 返回值，从login.json复制
// mockjs只是拦截地址，直接返回mock数据，并不会发送真实请求，所以你看不见network的请求
