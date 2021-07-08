//类似于vue里的import/export default,导入模块
// 是node里的写法
//commonjs规范
module.exports = {
    // 默认加载devServer里的配置表
    devServer:{
        // 主机-之后会发给nodejs
      host:'localhost',
      // 端口，一般默认8080
      port:8080,
    //   通过proxy进行api接口拦截
    // 访问的是/a实际代理到 /b
      proxy:{
          // /api是虚拟地址
          // 不能用于jsonp请求，只能用于axios发出的请求
        '/api':{
          // 加api为了方便自己统一拦截,保證所有接口api開頭
          // /api是虚拟出来的
            // 拦截到api时代理到的目标/代理到哪里去，根据环境不同在域名前加前缀
          target:'http://mall-pre.springboot.cn',
          // 真實的後台地址
          changeOrigin:true,
          pathRewrite:{
              // 路径转换规则-碰到/api时把它转成空
              // 访问api时实际上代理到http://mall-pre.springboot.cn，/api后的/path会拼接到这个网址上
              // eg访问的url是/api/activity,实际访问http://mall-pre.springboot.cn/activity
              //如果devtool出现404说明配置表/接口信息拦截有问题
              //上线时没有vue.config,要重新部署
            '/api':''
          }
        }
      }
    },
    // lintOnSave:false
    productionSourceMap:true,
    chainWebpack:(config)=>{
      config.plugins.delete('prefetch');
    }

}